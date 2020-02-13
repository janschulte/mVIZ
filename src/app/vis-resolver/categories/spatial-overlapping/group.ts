import { CategoryEntry, CategoryGroup } from '../../model';
import { Identic } from './identic';
import { Overlapping } from './overlapping';
import { Seperated } from './seperated';

export class SpatialOverlappingOfThemesCG implements CategoryGroup {

    label = 'Räumliche Überlagerung verschiedener Themen';

    description = 'Messungen unterschiedlicher Variablen mit zugehöriger räumlicher ' +
        'Abdeckung können innerhalb derselben Visualisierung dargestellt werden.';

    multi = true;

    categoryEntries: CategoryEntry[] = [];

    constructor() {
        this.categoryEntries.push(new Identic());
        this.categoryEntries.push(new Overlapping());
        this.categoryEntries.push(new Seperated());
    }
}
