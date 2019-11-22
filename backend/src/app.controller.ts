import { Controller, Get, Query } from '@nestjs/common';

import { Dataset } from '../../shared/model/dataset';
import { MCloudInterface } from './m-cloud-interface';

@Controller('datasets')
export class AppController {
  constructor(
    private readonly mCloudService: MCloudInterface,
  ) { }

  @Get()
  getDatasets(@Query('searchTerm') searchTerm): Dataset[] {
    return this.mCloudService.getDatasets(searchTerm);
  }
}
