import { Component, Input, OnInit } from '@angular/core';

import { Distribution } from '../../shared/dataset';

@Component({
  selector: 'app-ascertain-visualization',
  templateUrl: './ascertain-visualization.component.html',
  styleUrls: ['./ascertain-visualization.component.scss']
})
export class AscertainVisualizationComponent implements OnInit {

  @Input() distribution: Distribution;

  constructor() { }

  ngOnInit() {
  }

}
