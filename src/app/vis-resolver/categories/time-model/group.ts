import { CategoryEntry, CategoryGroup } from '../../model';
import { Cyclical } from './cyclical';
import { Linear } from './linear';

export class TimeModelCG implements CategoryGroup {

    label = 'Zeitmodell';

    description = 'Wie wird die Zeit von der Visualisierung behandelt. Lineare, fortlaufende Darstellung vs. Kreisdarstellung.';

    multi = true;

    categoryEntries: CategoryEntry[] = [];

    constructor() {
        this.categoryEntries.push(new Linear());
        this.categoryEntries.push(new Cyclical());
    }
}
