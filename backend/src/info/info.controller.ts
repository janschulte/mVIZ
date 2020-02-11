import { Controller, Get } from '@nestjs/common';

import { DatasetProvider } from '../provider/dataset-provider';
import { Info } from '../shared/info';

@Controller('info')
export class InfoController {

    constructor(
        private readonly datasetProvider: DatasetProvider,
    ) { }

    @Get()
    getInfo(): Info {
        return {
            lastHarvestTime: this.datasetProvider.getLastHarvestTime(),
        };
    }

}
