import { CategoryEntry, CategoryGroup } from '../../model';
import { Interval } from './interval';
import { Point } from './point';

export class TimePrimitiveCG implements CategoryGroup {

    label = 'Zeitprimitiv/ Zeitangabe';

    description = 'Welche Primitive werden von der Visualisierung unterstützt';

    multi = true;

    categoryEntries: CategoryEntry[] = [];

    constructor() {
        this.categoryEntries.push(new Point());
        this.categoryEntries.push(new Interval());
    }
}
