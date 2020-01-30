import { CategoryGroup } from '../../model';
import { CategoryEntrySelection } from './../../model';
import { Ts0 } from './ts0';
import { Ts1 } from './ts1';
import { TsM } from './tsm';

export class ThematicVariable implements CategoryGroup {

    label = 'Anzahl thematische Variablen';

    description = 'Visualisierung kann x unterschiedliche Variablen darstellen.';

    multi = false;

    categoryEntriesSelection: CategoryEntrySelection[] = [];

    constructor() {
        this.categoryEntriesSelection.push({ entry: new Ts0(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Ts1(), selected: false });
        this.categoryEntriesSelection.push({ entry: new TsM(), selected: false });
    }
}
