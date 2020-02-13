import { CategoryGroup, CategoryEntry } from '../../model';
import { Time } from './time';
import { Spatial } from './spatial';
import { SpatialTime } from './spatial-time';

export class FocusCG implements CategoryGroup {

    label = 'Fokus';

    description = 'Welche Veränderung kann von der Visualisierung dargestellt werden.';

    multi = true;

    categoryEntries: CategoryEntry[] = [];

    constructor() {
        this.categoryEntries.push(new Time());
        this.categoryEntries.push(new Spatial());
        this.categoryEntries.push(new SpatialTime());
    }
}
