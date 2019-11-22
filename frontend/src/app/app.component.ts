import { Component, OnInit } from '@angular/core';

import { Dataset } from '../../../backend/src/shared/dataset';
import { DatasetInterface } from './mcloud-interface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public datasets: Dataset[];

  constructor(
    private mcloudInterface: DatasetInterface
  ) { }

  ngOnInit(): void {
    this.mcloudInterface.getDatasets().subscribe(res => {
      this.datasets = res;
    });
  }

  public openInMFund(url) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  public getTypeList(ds: Dataset) {
    if (ds && ds.distributions) {
      return ds.distributions.map(e => e.type).join(', ');
    }
  }
}
