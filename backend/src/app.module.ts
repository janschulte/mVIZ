import { HttpModule, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MCloudInterface } from './m-cloud-interface';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, MCloudInterface],
})
export class AppModule { }
