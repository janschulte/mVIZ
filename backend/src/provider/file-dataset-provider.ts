import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { first } from 'rxjs/operators';

import { Dataset } from '../shared/dataset';
import { DatasetProvider } from './dataset-provider';
import { MCloudHarvester } from './m-cloud-harvester';

const FILE_NAME = 'dataset.json';
@Injectable()
export class FileDatasetProvider implements DatasetProvider {

    private datasets: Dataset[];

    constructor(
        private harvester: MCloudHarvester,
    ) {
        console.log(`FileDatasetProvider started`);
        this.initDatasets();
    }

    public getDatasets(searchTerm: string) {
        if (searchTerm) {
            return this.datasets.filter(e => e.title.indexOf(searchTerm) >= 0 || e.description.indexOf(searchTerm) >= 0);
        }
        return this.datasets;
    }

    private initDatasets() {
        if (fs.existsSync(FILE_NAME)) {
            console.log(`Load datasets from file`);
            const rawData = fs.readFileSync(FILE_NAME, 'utf-8');
            this.datasets = JSON.parse(rawData);
        } else {
            console.log(`Harvest datasets`);
            this.harvester.getDatasets().pipe(first()).subscribe(res => {
                this.datasets = res;
                fs.writeFileSync(FILE_NAME, JSON.stringify(this.datasets));
            });
        }
    }

}
