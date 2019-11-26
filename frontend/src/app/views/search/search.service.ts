import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Dataset } from '../../../../../backend/src/shared/dataset';
import { DatasetInterface } from '../../mcloud-interface.service';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public onResultsChanged: EventEmitter<Dataset[]> = new EventEmitter();
  public onLoading: ReplaySubject<boolean> = new ReplaySubject(1);

  private searchTerm: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datasetInterface: DatasetInterface
  ) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe((params: Params) => this.checkForParams(params));
    }
  }

  setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.updateUrlParameter();
  }

  private updateUrlParameter() {
    this.router.navigate(['search'], {
      relativeTo: this.route,
      queryParams: this.createQueryParams()
    });
  }

  private createQueryParams(): Params {
    const queryParams: Params = {};
    if (this.searchTerm) {
      queryParams.searchTerm = this.searchTerm;
    }
    return queryParams;
  }

  private checkForParams(params: Params) {
    if (params.searchTerm) {
      this.searchTerm = params.searchTerm;
    }
    this.startSearch();
  }


  private startSearch() {
    this.onLoading.next(true);
    this.datasetInterface.getDatasets(this.searchTerm).subscribe(res => {
      this.onResultsChanged.emit(res);
      this.onLoading.next(false);
    });
  }
}
