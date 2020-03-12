import { CategoryEntry, CategoryGroup } from '../../model';
import { CategoryHelper } from './../category-helper';
import { ThematicVariableCG } from './../thematic-variables/group';
import { Ts0 } from './../thematic-variables/ts0';

export class Identic extends CategoryEntry {

    label = 'Identisch';
    metadataLink = 'identical';
    description = 'Zeitpunkte oder Zeitintervalle identisch';
    selected = false;
    disabled = false;
    ThreeDVases = 0;
    PencilIconsOnMap = 1;
    HelixIconsOnMap = 1;
    Wakame = 1;
    GeoTime = 0;
    TrajectoryWall = 1;
    DensityTrajectoryWall = 1;
    TimeVaryingHierarchiesOnMaps = 0;
    ProportionalPictorialSymbol = 0;
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
    Scatterplot = 0;
    Barchart = 0;
    StackedBarchart = 1;
    StackedAreaChart = 1;
    BubbleChart = 0;
    SpiralPlot = 0;
    EventStacks = 0;
    TemporalFocus = 0;
    HeatmapWithoutMap = 0;
    checkDeactivation(groups: CategoryGroup[]): void {
        this.disabled = new CategoryHelper().findCategoryEntrySelection(groups, ThematicVariableCG, Ts0).selected;
    }

}
