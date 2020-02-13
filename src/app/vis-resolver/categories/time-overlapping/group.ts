import { CategoryEntry, CategoryGroup } from '../../model';
import { Identic } from './identic';
import { Overlapping } from './overlapping';
import { Seperated } from './seperated';

export class TimeOverlappingOfThemesCG implements CategoryGroup {

    label = 'Zeitliche Überlagerung verschiedener Themen';

    description = 'Werte unterschiedlicher Variablen zu x Zeitpunkten können innerhalb derselben Visualisierung dargestellt werden.';

    multi = true;

    categoryEntries: CategoryEntry[] = [];

    constructor() {
        this.categoryEntries.push(new Identic());
        this.categoryEntries.push(new Overlapping());
        this.categoryEntries.push(new Seperated());
    }
}
