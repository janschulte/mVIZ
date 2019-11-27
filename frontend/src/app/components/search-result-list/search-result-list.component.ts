import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Dataset } from '../../../../../backend/src/shared/dataset';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent {

  constructor(
    private router: Router
  ) { }

  @Input() public datasets: Dataset[];

  public openInMFund(url) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  public showDetails(id: string, newTab: boolean) {
    if (newTab) {
      window.open(`/details/${id}`, '_blank');
    } else {
      this.router.navigate([`/details/${id}`]);
    }
  }

  public getTypeList(ds: Dataset) {
    if (ds && ds.distributions) {
      return ds.distributions.map(e => e.type).join(', ');
    }
  }

}
