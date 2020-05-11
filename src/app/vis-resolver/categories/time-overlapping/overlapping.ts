import { CategoryEntry, CategoryGroup } from '../../model';
import { CategoryHelper } from '../category-helper';
import { ThematicVariableCG } from '../thematic-variables/group';
import { Ts0 } from '../thematic-variables/ts0';

export class Overlapping extends CategoryEntry {
    label = 'Überlappend';
    metadataLink = 'overlapping';
    description = 'Zeitintervalle überlappen sich';
    selected = false;
    disabled = false;
    ThreeDVases = 0;
    PencilIconsOnMap = 0;
    HelixIconsOnMap = 0;
    Wakame = 1;
    GeoTime = 1;
    TrajectoryWall = 1;
    DensityTrajectoryWall = 0;
    TimeVaryingHierarchiesOnMaps = 0;
    ProportionalPictorialSymbol = 1;
    FlowMap = 0;
    RingMaps = 1;
    LineMap = 1;
    PointMap = 0;
    DotDensityMap = 0;
    Heatmap = 0;
    HeatPointMap = 0;
    ConnectionMap = 0;
    Choropleth = 0;
    HeatMapAdditionalMap = 1;
    LineGraph = 1;
    Scatterplot = 1;
    Barchart = 0;
    StackedBarchart = 0;
    StackedAreaChart = 1;
    BubbleChart = 0;
    SpiralPlot = 1;
    EventStacks = 1;
    TemporalFocus = 0;
    HeatmapWithoutMap = 0;
    checkDeactivation(groups: CategoryGroup[]): void {
        this.disabled = new CategoryHelper().findCategoryEntrySelection(groups, ThematicVariableCG, Ts0).selected;
    }
}
