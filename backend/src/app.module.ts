import { HttpModule, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { MCloudInterface } from './m-cloud-interface';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [MCloudInterface],
})
export class AppModule { }
