import { Component, OnInit } from '@angular/core';

import { SearchService } from './../../views/search/search.service';

@Component({
  selector: 'app-last-update-time',
  templateUrl: './last-update-time.component.html',
  styleUrls: ['./last-update-time.component.scss']
})
export class LastUpdateTimeComponent implements OnInit {

  public lastUpdateTime: Date;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.onUpdateTimeChanged.subscribe(date => this.lastUpdateTime = date);
  }

}
