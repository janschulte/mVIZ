import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Dataset } from '../../../shared/model/dataset';

enum Namespaces {
  DCAT = 'http://www.w3.org/ns/dcat#',
  HYDRA = 'http://www.w3.org/ns/hydra/core#',
  DCTERMS = 'http://purl.org/dc/terms/'
}

@Injectable({ providedIn: 'root' })
export class McloudInterfaceService {

  constructor(
    private http: HttpClient
  ) { }

  public getDatasets(): Observable<Dataset[]> {
    const mcloudUrl = 'http://localhost:3000/';
    return this.http.get<Dataset[]>(`${mcloudUrl}datasets`);
  }
}
