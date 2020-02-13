import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { CategoryGroup, Visualisation } from './../../model';
import { VisResolverService } from './../../vis-resolver.service';

@Component({
  selector: 'app-vis-resolver',
  templateUrl: './vis-resolver.component.html',
  styleUrls: ['./vis-resolver.component.scss']
})
export class VisResolverComponent implements OnInit {

  displayedColumns: string[] = ['label', 'score'];

  public groups: CategoryGroup[] = [];

  public visualisations = new MatTableDataSource<Visualisation>();

  constructor(
    private visRes: VisResolverService
  ) { }

  ngOnInit() {
    this.groups = this.visRes.groups;
    this.visRes.changedVisualizations.subscribe(vis => this.visualisations.data = this.prepareVisualizations(vis));
  }

  private prepareVisualizations(vis: Visualisation[]): Visualisation[] {
    return vis.filter(e => e.score > 0).sort((a, b) => b.score - a.score);
  }

}
