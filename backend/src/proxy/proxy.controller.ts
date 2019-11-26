import { Controller, Get, HttpService, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller('proxy')
export class ProxyController {

    constructor(
        private http: HttpService,
    ) { }

    @Get()
    proxy(@Query('url') url): Observable<any> {
        return this.http.get(url).pipe(map(res => res.data));
    }

}
