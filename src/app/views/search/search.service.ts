import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

import { DatasetInterface } from '../../mcloud-interface.service';
import { Dataset, DistributionType } from '../../shared/dataset';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public onResultsChanged: ReplaySubject<Dataset[]> = new ReplaySubject(1);
  public onUpdateTimeChanged: ReplaySubject<Date> = new ReplaySubject(1);
  public onSearchTermChanged: ReplaySubject<string> = new ReplaySubject(1);
  public onLoading: ReplaySubject<boolean> = new ReplaySubject(1);
  public onDistributionTypesChanged: ReplaySubject<DistributionType[]> = new ReplaySubject(1);

  private searchTerm: string;
  private distributionTypes: DistributionType[] = [];

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

  setDistributionType(dt: DistributionType, selected: boolean) {
    const match = this.distributionTypes.findIndex(e => e === dt);
    if (selected) {
      if (match === -1) { this.distributionTypes.push(dt); }
    } else {
      if (match !== -1) { this.distributionTypes.splice(match, 1); }
    }
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
    if (this.distributionTypes && this.distributionTypes.length > 0) {
      queryParams.distributionType = this.distributionTypes.join(',');
    }
    return queryParams;
  }

  private checkForParams(params: Params) {
    if (params.searchTerm) {
      this.searchTerm = params.searchTerm;
      this.onSearchTermChanged.next(this.searchTerm);
    }
    if (params.distributionType) {
      this.distributionTypes = params.distributionType.split(',');
      this.onDistributionTypesChanged.next(this.distributionTypes);
    }
    this.startSearch();
  }


  private startSearch() {
    this.onLoading.next(true);
    this.datasetInterface.getInfo().subscribe(
      res => this.onUpdateTimeChanged.next(res.lastHarvestTime),
      error => console.error(error)
    );
    this.datasetInterface.getDatasets(this.searchTerm, this.distributionTypes).subscribe(
      res => {
        this.onResultsChanged.next(res);
        this.onLoading.next(false);
      },
      error => console.error(error)
    );
  }
}
