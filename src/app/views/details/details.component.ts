import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DatasetInterface } from '../../services/mcloud-interface.service';
import { Dataset } from '../../shared/dataset';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public dataset: Dataset;

  constructor(
    private route: ActivatedRoute,
    private datasetInterface: DatasetInterface
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      const id = res.get('id');
      this.datasetInterface.getDataset(id).subscribe(
        dataset => this.dataset = dataset
      );
    });
  }

}
