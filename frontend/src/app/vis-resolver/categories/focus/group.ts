import { CategoryGroup } from '../../model';
import { CategoryEntrySelection } from './../../model';
import { Time } from './time';
import { Spatial } from './spatial';
import { SpatialTime } from './spatial-time';

export class FocusCG implements CategoryGroup {

    label = 'Fokus';

    description = 'Welche Veränderung kann von der Visualisierung dargestellt werden.';

    multi = true;

    categoryEntriesSelection: CategoryEntrySelection[] = [];

    constructor() {
        this.categoryEntriesSelection.push({ entry: new Time(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Spatial(), selected: false });
        this.categoryEntriesSelection.push({ entry: new SpatialTime(), selected: false });
    }
}
