import { CategoryEntrySelection, CategoryGroup } from '../../model';
import { Identic } from './identic';
import { Overlapping } from './overlapping';
import { Seperated } from './seperated';

export class SpatialOverlappingOfThemes implements CategoryGroup {

    label = 'Räumliche Überlagerung verschiedener Themen';

    description = 'Messungen unterschiedlicher Variablen mit zugehöriger räumlicher Abdeckung können innerhalb derselben Visualisierung dargestellt werden. Nutzerinteraktion „wie viele Variablen sollen gleichzeitig visualisiert werden“ hat hier Einfluss.';

    multi = true;

    categoryEntriesSelection: CategoryEntrySelection[] = [];

    constructor() {
        this.categoryEntriesSelection.push({ entry: new Identic(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Overlapping(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Seperated(), selected: false });
    }
}
