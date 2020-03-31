import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DatasetInterface } from '../../services/mcloud-interface.service';
import { Metadata, MetadataInterfaceService } from '../../services/metadata-interface.service';
import { Dataset } from '../../shared/dataset';

@Component({
  selector: 'app-details-vis-resolver',
  templateUrl: './details-vis-resolver.component.html',
  styleUrls: ['./details-vis-resolver.component.scss']
})
export class DetailsVisResolverComponent implements OnInit {

  public dataset: Dataset;

  public metadata: Metadata;

  public error: string;
  public loadingDataset: boolean;
  public loadingMetadata: boolean;

  constructor(
    private route: ActivatedRoute,
    private datasetInterface: DatasetInterface,
    private metadataInterface: MetadataInterfaceService
  ) { }

  ngOnInit() {
    this.loadingDataset = true;
    this.loadingMetadata = true;
    this.route.paramMap.subscribe(res => {
      const id = res.get('id');
      this.datasetInterface.getDataset(id).subscribe(
        dataset => {
          this.dataset = dataset;
          this.loadingDataset = false;
        },
        error => {
          this.handleError(error);
          this.loadingDataset = false;
        }
      );
      const fileName = decodeURIComponent(res.get('file'));
      this.metadataInterface.getMetadata(id, fileName).subscribe(
        metadata => {
          this.metadata = metadata;
          this.loadingMetadata = false;
        },
        error => {
          this.handleError(error);
          this.loadingMetadata = false;
        }
      );
    });
  }

  private handleError(error: Error): void {
    this.error = error.message || error.name || error.stack;
    console.error(error);
  }
}
