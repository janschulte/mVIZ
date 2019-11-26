import { Component, OnInit } from '@angular/core';

import { Dataset } from '../../../../../backend/src/shared/dataset';
import { DistributionType } from './../../../../../backend/src/shared/dataset';
import { SearchService } from './search.service';

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
    private search: SearchService
  ) { }

  public ngOnInit() {
    this.search.onResultsChanged.subscribe(res => this.datasets = res);
    this.search.onLoading.subscribe(loading => {
      console.log(loading);
      this.loading = loading;
    });
  }

  public clearSearchTerm() {
    this.searchTerm = '';
    this.triggerSearch();
  }

  public triggerSearch() {
    this.search.setSearchTerm(this.searchTerm);
  }

}
