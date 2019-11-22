import { Controller, Get } from '@nestjs/common';

import { Dataset } from '../../shared/model/dataset';
import { AppService } from './app.service';
import { MCloudInterface } from './m-cloud-interface';

@Controller('datasets')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mCloudService: MCloudInterface,
  ) { }

  @Get()
  getDatasets(): Dataset[] {
    return this.mCloudService.datasets;
  }
}
