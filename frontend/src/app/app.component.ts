import { Component, OnInit } from '@angular/core';

import { Dataset, McloudInterfaceService } from './mcloud-interface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public datasets: Dataset[];

  constructor(
    private mcloudInterface: McloudInterfaceService
  ) { }

  ngOnInit(): void {
    this.mcloudInterface.getResults().subscribe(res => {
      this.datasets = res;
    });
  }

}
