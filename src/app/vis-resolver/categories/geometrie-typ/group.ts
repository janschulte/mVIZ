import { CategoryGroup, CategoryEntry } from '../../model';
import { Coverages } from './coverages';
import { Line } from './line';
import { Point } from './point';
import { Polygon } from './polygon';
import { Trajectory } from './trajectory';
import { Volume } from './volume';

export class GeometryTypeCG implements CategoryGroup {

    label = 'Geometrietyp';

    description = 'Typ/Ausdehnung auf den sich ein thematischer Datenpunkt beziehen (Geometrische Primitive entspr. ISO 19107).';

    multi = true;

    categoryEntries: CategoryEntry[] = [];

    constructor() {
        this.categoryEntries.push(new Point());
        this.categoryEntries.push(new Line());
        this.categoryEntries.push(new Polygon());
        this.categoryEntries.push(new Volume());
        this.categoryEntries.push(new Trajectory());
        this.categoryEntries.push(new Coverages());
    }
}
