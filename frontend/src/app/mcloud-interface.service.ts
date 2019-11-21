import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

enum Namespaces {
  DCAT = 'http://www.w3.org/ns/dcat#',
  HYDRA = 'http://www.w3.org/ns/hydra/core#',
  DCTERMS = 'http://purl.org/dc/terms/'
}

export interface Dataset {
  id: string;
  title: string;
  description: string;
  lastModified: Date;
  keywords: string[];
}

@Injectable({ providedIn: 'root' })
export class McloudInterfaceService {

  constructor(
    private http: HttpClient
  ) { }

  public getResults(): Observable<Dataset[]> {
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const mcloudUrl = 'https://www.mcloud.de/export/datasets';
    return this.http.get(`${corsProxy}${mcloudUrl}?page=1&pageSize=50`, { responseType: 'text' }).pipe(map(res => {
      const doc = this.parseDocument(res);
      return this.parseDatasets(doc);
    }));
  }

  private parseDatasets(doc: Document): Dataset[] {
    const datasets = [];
    const ds: HTMLCollection = doc.getElementsByTagNameNS(Namespaces.DCAT, 'Dataset');
    for (let i = 0; i < ds.length; i++) {
      datasets.push(this.parseDataset(ds[i]));
    }
    return datasets;
  }

  private parseDataset(elem: Element): Dataset {
    const id = this.getTextContent(elem, Namespaces.DCTERMS, 'identifier');
    const title = this.getTextContent(elem, Namespaces.DCTERMS, 'title');
    const description = this.getTextContent(elem, Namespaces.DCTERMS, 'description');
    const modification = this.getTextContent(elem, Namespaces.DCTERMS, 'modified');
    const lastModified = modification ? new Date(modification) : null;

    const keywords = this.parseKeywords(elem);
    return {
      id,
      title,
      description,
      lastModified,
      keywords
    };
  }

  private parseKeywords(elem: Element): string[] {
    const keywords = [];
    const keywordElemes = elem.getElementsByTagNameNS(Namespaces.DCAT, 'keyword');
    for (let i = 0; i < keywordElemes.length; i++) {
      keywords.push(keywordElemes[i].textContent);
    }
    return keywords;
  }

  private getTextContent(elem: Element, ns: Namespaces, elemName: string): string {
    const coll = elem.getElementsByTagNameNS(ns, elemName);
    if (coll.length === 1) {
      return coll[0].textContent;
    }
  }

  private parseDocument(res: string): Document {
    return new DOMParser().parseFromString(res, 'text/xml');
  }
}
