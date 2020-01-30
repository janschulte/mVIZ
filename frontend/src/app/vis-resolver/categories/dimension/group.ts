import { CategoryGroup } from '../../model';
import { CategoryEntrySelection } from './../../model';
import { TwoD } from './2d';
import { ThreeD } from './3d';

export class DimensionCG implements CategoryGroup {

    label = 'Dimension';

    description = '';

    multi = true;

    categoryEntriesSelection: CategoryEntrySelection[] = [];

    constructor() {
        this.categoryEntriesSelection.push({ entry: new TwoD(), selected: false });
        this.categoryEntriesSelection.push({ entry: new ThreeD(), selected: false });
    }
}
