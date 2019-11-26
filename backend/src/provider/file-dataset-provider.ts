import { HttpService, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { first } from 'rxjs/operators';

import { Dataset, DistributionType } from '../shared/dataset';
import { DatasetProvider } from './dataset-provider';
import { MCloudHarvester } from './m-cloud-harvester';

const FILE_NAME = 'dataset.json';
@Injectable()
export class FileDatasetProvider implements DatasetProvider {

    private datasets: Dataset[];

    constructor(
        private harvester: MCloudHarvester,
        private http: HttpService,
    ) {
        console.log(`FileDatasetProvider started`);
        this.initDatasets();
    }

    public getDatasets(searchTerm: string, distributionTypes: DistributionType[]) {
        let filteredSet = this.datasets;
        if (searchTerm) {
            filteredSet = filteredSet.filter(
                e => e.title.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) >= 0
                    || e.description.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) >= 0,
            );
        }
        if (distributionTypes && distributionTypes.length > 0) {
            filteredSet = filteredSet.filter(e => {
                const match = e.distributions.find(d => {
                    const idx = distributionTypes.indexOf(d.type);
                    return idx >= 0;
                });
                return !!match;
            });
        }
        return filteredSet;
    }

    public getDataset(id: string): Dataset {
        const dataset = this.datasets.find(e => e.id === id);
        return dataset;
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
