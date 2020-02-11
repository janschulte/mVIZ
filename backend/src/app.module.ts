import { HttpModule, Module } from '@nestjs/common';

import { DatasetController } from './dataset/dataset.controller';
import { DatasetProvider } from './provider/dataset-provider';
import { FileDatasetProvider } from './provider/file-dataset-provider';
import { MCloudHarvester } from './provider/m-cloud-harvester';
import { ProxyController } from './proxy/proxy.controller';
import { InfoController } from './info/info.controller';

@Module({
  imports: [HttpModule],
  controllers: [DatasetController, ProxyController, InfoController],
  providers: [
    {
      provide: DatasetProvider,
      useClass: FileDatasetProvider,
    },
    MCloudHarvester,
  ],
})
export class AppModule { }
