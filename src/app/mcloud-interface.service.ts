import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SettingsService } from './services/settings.service';
import { Dataset, Datasets, DistributionType } from './shared/dataset';
import { Info } from './shared/info';

@Injectable({ providedIn: 'root' })
export class DatasetInterface {

  constructor(
    private http: HttpClient,
    private settingsSrvc: SettingsService
  ) { }

  public getDatasets(
    searchTerm: string,
    distributionTypes: DistributionType[],
    limit: number,
    offset: number
  ): Observable<Datasets> {
    let params: HttpParams = new HttpParams();
    if (searchTerm) {
      params = params.set('searchTerm', searchTerm);
    }
    if (distributionTypes && distributionTypes.length > 0) {
      params = params.set('distributionType', distributionTypes.join(','));
    }
    if (limit) {
      params = params.set('limit', limit.toString());
    }
    if (offset) {
      params = params.set('offset', offset.toString());
    }
    return this.http.get<Datasets>(`${this.settingsSrvc.settings.mvizServerUrl}dataset`, { params });
  }

  public getDataset(id: string): Observable<Dataset> {
    return this.http.get<Dataset>(`${this.settingsSrvc.settings.mvizServerUrl}dataset/${id}`);
  }

  public getInfo(): Observable<Info> {
    return this.http.get<Info>(`${this.settingsSrvc.settings.mvizServerUrl}info`);
  }

}
