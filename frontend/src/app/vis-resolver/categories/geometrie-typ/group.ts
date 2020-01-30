import { CategoryEntrySelection, CategoryGroup } from '../../model';
import { Coverages } from './coverages';
import { Line } from './line';
import { Point } from './point';
import { Polygon } from './polygon';
import { Trajectory } from './trajectory';
import { Volume } from './volume';

export class GeometryType implements CategoryGroup {

    label = 'Geometrietyp';

    description = 'Typ/Ausdehnung auf den sich ein thematischer Datenpunkt beziehen (Geometrische Primitive entspr. ISO 19107).';

    multi = true;

    categoryEntriesSelection: CategoryEntrySelection[] = [];

    constructor() {
        this.categoryEntriesSelection.push({ entry: new Point(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Line(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Polygon(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Volume(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Trajectory(), selected: false });
        this.categoryEntriesSelection.push({ entry: new Coverages(), selected: false });
    }
}
