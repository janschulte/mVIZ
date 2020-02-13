import { Component, Input, OnInit } from '@angular/core';

import { VisResolverService } from '../../vis-resolver.service';
import { CategoryGroup } from './../../model';

@Component({
  selector: 'app-category-group',
  templateUrl: './category-group.component.html',
  styleUrls: ['./category-group.component.scss']
})
export class CategoryGroupComponent implements OnInit {

  @Input() public group: CategoryGroup;

  public disabled: boolean;

  constructor(
    public visRes: VisResolverService
  ) { }

  ngOnInit() {
  }

  public changed() {
    this.visRes.calculateVisList();
  }

  public singleSelectionChanged(selectedLabel: string) {
    this.group.categoryEntries.forEach(e => e.selected = false);
    this.group.categoryEntries.find(e => e.label === selectedLabel).selected = true;
    this.visRes.calculateVisList();
  }

  public isDisabled(): boolean {
    return this.group.categoryEntries.every(e => e.disabled);
  }

}
