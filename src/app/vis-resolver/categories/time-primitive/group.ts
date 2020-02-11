import { CategoryGroup } from '../../model';
import { CategoryEntrySelection } from './../../model';
import { Interval } from './interval';
import { Point } from './point';

export class TimePrimitiveCG implements CategoryGroup {

    label = 'Zeitprimitiv/ Zeitangabe';

    description = 'Welche Primitive werden von der Visualisierung unterstützt';

    multi = true;

    categoryEntriesSelection: CategoryEntrySelection[] = [];

    constructor() {
        this.categoryEntriesSelection.push({ entry: new Point(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Interval(), selected: false });
    }
}
