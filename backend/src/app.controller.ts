import { Controller, Get, Query } from '@nestjs/common';

import { DatasetProvider } from './provider/dataset-provider';
import { Dataset } from './shared/dataset';

@Controller('datasets')
export class AppController {
  constructor(
    private readonly datasetProvider: DatasetProvider,
  ) { }

  @Get()
  getDatasets(@Query('searchTerm') searchTerm, @Query('distributionType') distributionTypes): Dataset[] {
    const distTypes = distributionTypes ? distributionTypes.split(',') : [];
    return this.datasetProvider.getDatasets(searchTerm, distTypes);
  }
}
