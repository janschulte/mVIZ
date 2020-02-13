import { Component, Input, OnInit } from '@angular/core';

import { CategoryGroup } from './../../model';
import { VisResolverService } from '../../vis-resolver.service';

@Component({
  selector: 'app-category-group',
  templateUrl: './category-group.component.html',
  styleUrls: ['./category-group.component.scss']
})
export class CategoryGroupComponent implements OnInit {

  @Input() public group: CategoryGroup;

  constructor(
    public visRes: VisResolverService
  ) { }

  ngOnInit() {
  }

  public changed() {
    this.visRes.calculateVisList();
  }

  public singelSelectionChanged(selectedLabel: string) {
    this.group.categoryEntries.forEach(e => e.selected = false);
    this.group.categoryEntries.find(e => e.label === selectedLabel).selected = true;
    this.visRes.calculateVisList();
  }

}
