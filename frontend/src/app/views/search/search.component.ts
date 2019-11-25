import { Component, OnInit } from '@angular/core';

import { Dataset } from '../../../../../backend/src/shared/dataset';
import { DatasetInterface } from '../../mcloud-interface.service';
import { DistributionType } from './../../../../../backend/src/shared/dataset';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public datasets: Dataset[];

  public loading: boolean;

  public searchTerm = '';

  public distributionTypes: DistributionType[] = [DistributionType.GEOJSON];

  constructor(
    private mcloudInterface: DatasetInterface
  ) { }

  ngOnInit() { }

  public search() {
    this.loading = true;
    this.mcloudInterface.getDatasets(this.searchTerm, this.distributionTypes).subscribe(
      res => { this.datasets = res; },
      error => { },
      () => this.loading = false);
  }

}
