import { Linear } from './linear';
import { Cyclical } from './cyclical';
import { CategoryGroup } from '../../model';
import { CategoryEntrySelection } from './../../model';

export class TimeModelCG implements CategoryGroup {

    label = 'Zeitmodell';

    description = 'Wie wird die Zeit von der Visualisierung behandelt. Lineare, fortlaufende Darstellung vs. Kreisdarstellung.';

    multi = true;

    categoryEntriesSelection: CategoryEntrySelection[] = [];

    constructor() {
        this.categoryEntriesSelection.push({ entry: new Linear(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Cyclical(), selected: false });
    }
}
