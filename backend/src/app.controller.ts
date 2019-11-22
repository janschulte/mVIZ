import { Controller, Get, Query } from '@nestjs/common';

import { Dataset } from './shared/dataset';
import { DatasetProvider } from './provider/dataset-provider';

@Controller('datasets')
export class AppController {
  constructor(
    private readonly datasetProvider: DatasetProvider,
  ) { }

  @Get()
  getDatasets(@Query('searchTerm') searchTerm): Dataset[] {
    return this.datasetProvider.getDatasets(searchTerm);
  }
}
