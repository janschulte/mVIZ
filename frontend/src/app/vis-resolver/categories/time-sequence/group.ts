import { Dynamic } from './dynamic';
import { Static } from './static';
import { CategoryGroup } from '../../model';
import { CategoryEntrySelection } from './../../model';

export class TimeSequenceCG implements CategoryGroup {

    label = 'Zeitabfolge';

    description = '';

    multi = true;

    categoryEntriesSelection: CategoryEntrySelection[] = [];

    constructor() {
        this.categoryEntriesSelection.push({ entry: new Static(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Dynamic(), selected: false });
    }
}
