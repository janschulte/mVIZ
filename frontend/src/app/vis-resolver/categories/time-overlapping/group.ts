import { CategoryGroup } from '../../model';
import { CategoryEntrySelection } from './../../model';
import { Identic } from './identic';
import { Overlapping } from './overlapping';
import { Seperated } from './seperated';

export class TimeOverlappingOfThemesCG implements CategoryGroup {

    label = 'Zeitliche Überlagerung verschiedener Themen';

    description = 'Werte unterschiedlicher Variablen zu x Zeitpunkten können innerhalb derselben Visualisierung dargestellt werden.';

    multi = true;

    categoryEntriesSelection: CategoryEntrySelection[] = [];

    constructor() {
        this.categoryEntriesSelection.push({ entry: new Identic(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Overlapping(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Seperated(), selected: false });
    }
}
