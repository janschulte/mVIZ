import { CategoryEntry, CategoryGroup } from '../../model';
import { Ts0 } from './ts0';
import { Ts1 } from './ts1';
import { TsM } from './tsm';

export class ThematicVariableCG implements CategoryGroup {

    label = 'Anzahl thematische Variablen';

    description = 'Visualisierung kann x unterschiedliche Variablen darstellen.';

    multi = false;

    categoryEntries: CategoryEntry[] = [];

    constructor() {
        this.categoryEntries.push(new Ts0());
        this.categoryEntries.push(new Ts1());
        this.categoryEntries.push(new TsM());
    }
}
