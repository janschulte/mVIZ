import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const mcloudUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class HttpProxyService {

  constructor(
    private http: HttpClient
  ) { }

  public get(url: string): Observable<any> {
    return this.http.get(`${mcloudUrl}proxy?url=${url}`);
  }

}
