import { Component, OnInit } from '@angular/core';

import { DatasetInterface } from '../../mcloud-interface.service';

@Component({
  selector: 'app-last-update-time',
  templateUrl: './last-update-time.component.html',
  styleUrls: ['./last-update-time.component.scss']
})
export class LastUpdateTimeComponent implements OnInit {

  public lastUpdateTime: Date;

  constructor(
    private datasetInterface: DatasetInterface
  ) { }

  ngOnInit() {
    this.datasetInterface.getInfo().subscribe(res => this.lastUpdateTime = res.lastHarvestTime);
  }

}
