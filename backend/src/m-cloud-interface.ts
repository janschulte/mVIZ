import { HttpService, Injectable } from '@nestjs/common';
import * as xmldom from 'xmldom';

import { Dataset } from '../../shared/model/dataset';
import { Keyword, KeywordType } from './../../shared/model/dataset';

enum Namespaces {
    DCAT = 'http://www.w3.org/ns/dcat#',
    HYDRA = 'http://www.w3.org/ns/hydra/core#',
    DCTERMS = 'http://purl.org/dc/terms/',
    FOAF = 'http://xmlns.com/foaf/0.1/',
    RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
}

@Injectable()
export class MCloudInterface {

    public datasets: Dataset[];

    constructor(
        private http: HttpService,
    ) {
        console.log(`${this.constructor.name} started`);
        const corsProxy = 'https://cors-anywhere.herokuapp.com/';
        const mcloudUrl = 'https://www.mcloud.de/export/datasets';
        this.http.get(`${mcloudUrl}?page=1&pageSize=10`).subscribe(res => {
            const doc = this.parseDocument(res.data);
            this.datasets = this.parseDatasets(doc);
            console.log(`Parsed ${this.datasets.length} Datasets`);
        });
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
        const publisher = elem.getElementsByTagNameNS(Namespaces.DCTERMS, 'publisher');
        const provider = this.getTextContent(publisher[0], Namespaces.FOAF, 'name');
        const mfundUrl = elem.getAttributeNS(Namespaces.RDF, 'about');
        const keywords = this.parseKeywords(elem);
        return {
            id,
            title,
            description,
            lastModified,
            keywords,
            provider,
            mfundUrl,
        };
    }

    private parseKeywords(elem: Element): Keyword[] {
        const keywords = [];
        const keywordElemes = elem.getElementsByTagNameNS(Namespaces.DCAT, 'keyword');
        for (let i = 0; i < keywordElemes.length; i++) {
            try {
                const textContent = keywordElemes[i].textContent;
                const splitIdx = textContent.indexOf(' ');
                const type = textContent.substring(0, splitIdx);
                const label = textContent.substring(splitIdx + 1, textContent.length);
                keywords.push(this.createKeyword(type, label));
            } catch (error) {
                console.error(`Error occured, while creating keyword ${keywordElemes[i]}`);
            }
        }
        return keywords;
    }

    createKeyword(type: string, label: string): Keyword {
        let kwt: KeywordType;
        kwt = Object.values(KeywordType).find(k => k === type) as KeywordType;
        if (!kwt) { console.error(`No keyword type found for '${type}'`); }
        return {
            type: kwt,
            label,
        };
    }

    private getTextContent(elem: Element, ns: Namespaces, elemName: string): string {
        const coll = elem.getElementsByTagNameNS(ns, elemName);
        if (coll.length === 1) {
            return coll[0].textContent;
        }
    }

    private parseDocument(res: string): Document {
        return new xmldom.DOMParser().parseFromString(res, 'text/xml');
    }
}
