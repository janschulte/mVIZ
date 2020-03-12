import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Metadata } from '../../../services/metadata-interface.service';
import { CategoryGroup, Visualisation } from './../../model';
import { VisResolverService } from './../../vis-resolver.service';

@Component({
  selector: 'app-vis-resolver',
  templateUrl: './vis-resolver.component.html',
  styleUrls: ['./vis-resolver.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class VisResolverComponent implements OnInit {

  @Input() metadata: Metadata;

  displayedColumns: string[] = ['label'];

  expandedVis: Visualisation | null;

  public groups: CategoryGroup[] = [];

  public visualisations = new MatTableDataSource<Visualisation>();

  constructor(
    private visRes: VisResolverService
  ) { }

  ngOnInit() {
    this.visRes.init(this.metadata);
    this.groups = this.visRes.groups;
    this.visRes.changedVisualizations.subscribe(vis => {
      this.expandedVis = null;
      this.prepareVisualizations(vis);
    });
  }

  private prepareVisualizations(vis: Visualisation[]) {
    this.visualisations.data = vis.sort((a, b) => b.score - a.score);
  }

}
