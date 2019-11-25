import { Dataset, DistributionType } from './../shared/dataset';

export abstract class DatasetProvider {
    public abstract getDatasets(searchTerm: string, distributionTypes: DistributionType[]): Dataset[];
    public abstract getDataset(id: string): Dataset;
}
