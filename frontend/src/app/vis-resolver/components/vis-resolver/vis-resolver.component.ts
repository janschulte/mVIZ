import { Component, OnInit } from '@angular/core';

import { CategoryGroup, Visualisation } from './../../model';
import { VisResolverService } from './../../vis-resolver.service';

@Component({
  selector: 'app-vis-resolver',
  templateUrl: './vis-resolver.component.html',
  styleUrls: ['./vis-resolver.component.scss']
})
export class VisResolverComponent implements OnInit {

  public groups: CategoryGroup[] = [];

  public visualisations: Visualisation[] = [];

  constructor(
    private visRes: VisResolverService
  ) { }

  ngOnInit() {
    this.groups = this.visRes.groups;
    this.visualisations = this.visRes.calculatedVisualisations;
  }

}
