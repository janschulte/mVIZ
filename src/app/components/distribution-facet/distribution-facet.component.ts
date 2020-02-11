import { Component, OnInit } from '@angular/core';

import { DistributionType } from '../../shared/dataset';
import { SearchService } from './../../views/search/search.service';

interface DistributionFacet {
  type: DistributionType;
  label: string;
  selected: boolean;
}

@Component({
  selector: 'app-distribution-facet',
  templateUrl: './distribution-facet.component.html',
  styleUrls: ['./distribution-facet.component.scss']
})
export class DistributionFacetComponent implements OnInit {

  public facets: DistributionFacet[] = [
    {
      type: DistributionType.GEOJSON,
      label: 'GeoJSON',
      selected: false
    }, {
      type: DistributionType.WMS,
      label: 'WMS',
      selected: false
    }, {
      type: DistributionType.UNKNOWN,
      label: 'Unbekannt',
      selected: false
    }
  ];

  constructor(
    private search: SearchService
  ) { }

  public ngOnInit() {
    this.search.onDistributionTypesChanged.subscribe(dt => {
      dt.forEach(e => {
        const match = this.facets.find(f => f.type === e);
        if (match) { match.selected = true; }
      });
    });
  }

  public triggerSearch(facet: DistributionFacet, selected: boolean) {
    facet.selected = selected;
    this.search.setDistributionType(facet.type, selected);
  }

}
