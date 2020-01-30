import { CategoryEntrySelection, CategoryGroup } from '../../model';
import { Nominal } from './nominal';
import { Ordinal } from './ordinal';
import { RatioInterval } from './ratioInterval';

export class LevelOfMeasurement implements CategoryGroup {

    label = 'Skalenniveau';

    description = 'Thematisches Skalenniveau, welches von der Visualisierung abgebildet werden kann.';

    multi = true;

    categoryEntriesSelection: CategoryEntrySelection[] = [];

    constructor() {
        this.categoryEntriesSelection.push({ entry: new Nominal(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Ordinal(), selected: false });
        this.categoryEntriesSelection.push({ entry: new RatioInterval(), selected: false });
    }
}
