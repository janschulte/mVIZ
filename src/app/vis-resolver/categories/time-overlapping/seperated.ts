import { CategoryEntry, CategoryGroup } from '../../model';
import { CategoryHelper } from '../category-helper';
import { ThematicVariableCG } from '../thematic-variables/group';
import { Ts0 } from '../thematic-variables/ts0';

export class Seperated extends CategoryEntry {
    label = 'Getrennt';
    description = 'Zeitpunkte oder Intervalle sind verschieden';
    selected = false;
    disabled = false;
    ThreeDVases = 0;
    PencilIconsOnMap = 0;
    HelixIconsOnMap = 0;
    Wakame = 1;
    GeoTime = 1;
    TrajectoryWall = 1;
    DensityTrajectoryWall = 1;
    TimeVaryingHierarchiesOnMaps = 0;
    ProportionalPictorialSymbol = 0;
    FlowMap = 0;
    RingMaps = 0;
    LineMap = 0;
    PointMap = 1;
    DotDensityMap = 0;
    Heatmap = 0;
    HeatPointMap = 0;
    ConnectionMap = 1;
    Choropleth = 0;
    HeatMapAdditionalMap = 0;
    LineGraph = 1;
    Scatterplot = 0;
    Barchart = 0;
    StackedBarchart = 0;
    StackedAreaChart = 0;
    BubbleChart = 1;
    SpiralPlot = 0;
    EventStacks = 0;
    TemporalFocus = 0;
    HeatmapWithoutMap = 0;
    checkDeactivation(groups: CategoryGroup[]): void {
        this.disabled = new CategoryHelper().findCategoryEntrySelection(groups, ThematicVariableCG, Ts0).selected;
    }
}
