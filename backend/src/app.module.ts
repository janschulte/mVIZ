import { HttpModule, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { DatasetProvider } from './provider/dataset-provider';
import { FileDatasetProvider } from './provider/file-dataset-provider';
import { MCloudHarvester } from './provider/m-cloud-harvester';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    {
      provide: DatasetProvider,
      useClass: FileDatasetProvider,
    },
    MCloudHarvester,
  ],
})
export class AppModule { }
