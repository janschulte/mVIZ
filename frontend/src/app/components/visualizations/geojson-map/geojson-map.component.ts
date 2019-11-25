import { Component, Input, OnInit } from '@angular/core';

import { Distribution } from '../../../../../../backend/src/shared/dataset';
import { HttpProxyService } from './../../../http-proxy.service';

@Component({
  selector: 'app-geojson-map',
  templateUrl: './geojson-map.component.html',
  styleUrls: ['./geojson-map.component.scss']
})
export class GeojsonMapComponent implements OnInit {

  @Input() distribution: Distribution;

  constructor(
    private proxy: HttpProxyService
  ) { }

  ngOnInit() {
    this.proxy.get(this.distribution.accessURL).subscribe(res => {
    });
  }

}
