import { CategoryEntry, CategoryGroup } from '../../model';
import { TwoD } from './2d';
import { ThreeD } from './3d';

export class DimensionCG implements CategoryGroup {

    label = 'Dimension';

    description = '';

    multi = true;

    categoryEntries: CategoryEntry[] = [];

    constructor() {
        this.categoryEntries.push(new TwoD());
        this.categoryEntries.push(new ThreeD());
    }
}
