import { Component, OnInit } from '@angular/core';

import { Datasets } from '../../shared/dataset';
import { SearchService } from './search.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public datasets: Datasets;

  public loading: boolean;

  public searchTerm = '';

  constructor(
    public search: SearchService
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

  public page(page: PageEvent) {
    this.search.setPage(page.pageIndex);
  }

}
