import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';

import { DatasetProvider } from '../provider/dataset-provider';
import { Dataset } from '../shared/dataset';

@Controller('dataset')
export class DatasetController {

  constructor(
    private readonly datasetProvider: DatasetProvider,
  ) { }

  @Get()
  getDatasets(@Query('searchTerm') searchTerm, @Query('distributionType') distributionTypes): Dataset[] {
    const distTypes = distributionTypes ? distributionTypes.split(',') : [];
    return this.datasetProvider.getDatasets(searchTerm, distTypes);
  }

  @Get(':id')
  getDataset(@Param('id') id): Dataset {
    const dataset = this.datasetProvider.getDataset(id);
    if (dataset) {
      return dataset;
    } else {
      throw new NotFoundException();
    }
  }
}
