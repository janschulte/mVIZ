import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Dataset } from '../../../backend/src/shared/dataset';

@Injectable({ providedIn: 'root' })
export class DatasetInterface {

  constructor(
    private http: HttpClient
  ) { }

  public getDatasets(): Observable<Dataset[]> {
    const mcloudUrl = 'http://localhost:3000/';
    return this.http.get<Dataset[]>(`${mcloudUrl}datasets`);
  }
}
