import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SettingsService } from './settings.service';

export interface Metadata {
  thematicVariables: string[];
  temporalOverlay: string[];
  spatialOverlay: string[];
  scaleOfMeasure: string[];
  geometryType: string[];
  focus: string[];
  timePrimitive: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MetadataInterfaceService {

  constructor(
    private settings: SettingsService,
    private http: HttpClient
  ) { }

  public getMetadata(mcloudId: string, fileName: string): Observable<Metadata> {
    fileName = fileName.replace(new RegExp('/', 'g'), ''); // remove '/'
    fileName = fileName.replace(new RegExp('/?', 'g'), ''); // remove '?'
    const url = `${this.settings.settings.metadataUrl}dctmeta/${mcloudId}/${fileName}`;
    return this.http.get(url).pipe(
      map(res => (res instanceof Array && res.length === 1) ? res[0] : res),
    );
  }
}
