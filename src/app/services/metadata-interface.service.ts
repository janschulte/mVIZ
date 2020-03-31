import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SettingsService } from './settings.service';

export interface Metadata {
  _id: string;
  cloudID: string;
  name: string;
  fileID: string;
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
    const url = `${this.settings.settings.metadataUrl}dctmeta/cloudId/${mcloudId}`;
    return this.http.get<Metadata[]>('https://cors-anywhere.herokuapp.com/' + url).pipe(
      map(res => {
        const md = res.find(e => e.fileID === fileName);
        if (md) {
          return md;
        } else {
          throw new Error(`Could not find file '${fileName}' in response to cloudID '${mcloudId}'.
                           See <a href="${url}" target="_blank">here</a>.`);
        }
      }),
    );
  }
}
