import { CategoryEntry, CategoryGroup } from '../../model';
import { Nominal } from './nominal';
import { Ordinal } from './ordinal';
import { RatioInterval } from './ratioInterval';

export class LevelOfMeasurementCG implements CategoryGroup {

    label = 'Skalenniveau';

    description = 'Thematisches Skalenniveau, welches von der Visualisierung abgebildet werden kann.';

    multi = true;

    categoryEntries: CategoryEntry[] = [];

    constructor() {
        this.categoryEntries.push(new Nominal());
        this.categoryEntries.push(new Ordinal());
        this.categoryEntries.push(new RatioInterval());
    }
}
