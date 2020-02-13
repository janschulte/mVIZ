import { Dynamic } from './dynamic';
import { Static } from './static';
import { CategoryGroup, CategoryEntry } from '../../model';

export class TimeSequenceCG implements CategoryGroup {

    label = 'Zeitabfolge';

    description = '';

    multi = true;

    categoryEntries: CategoryEntry[] = [];

    constructor() {
        this.categoryEntries.push(new Static());
        this.categoryEntries.push(new Dynamic());
    }
}
