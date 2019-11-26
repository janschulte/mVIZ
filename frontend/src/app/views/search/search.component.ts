import { Component, OnInit } from '@angular/core';

import { Dataset } from '../../../../../backend/src/shared/dataset';
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

  constructor(
    private search: SearchService
  ) { }

  public ngOnInit() {
    this.search.onResultsChanged.subscribe(ds => this.datasets = ds);
    this.search.onLoading.subscribe(l => this.loading = l);
    this.search.onSearchTermChanged.subscribe(st => this.searchTerm = st);
  }

  public clearSearchTerm() {
    this.searchTerm = '';
    this.triggerSearch();
  }

  public triggerSearch() {
    this.search.setSearchTerm(this.searchTerm);
  }

}
