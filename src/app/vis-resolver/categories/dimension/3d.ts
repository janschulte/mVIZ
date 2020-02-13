import { CategoryEntry, CategoryGroup } from '../../model';

export class ThreeD extends CategoryEntry {
    label = '3D';
    description = '';
    selected = false;
    disabled = false;
    ThreeDVases = 1;
    PencilIconsOnMap = 1;
    HelixIconsOnMap = 1;
    Wakame = 1;
    GeoTime = 1;
    TrajectoryWall = 1;
    DensityTrajectoryWall = 1;
    TimeVaryingHierarchiesOnMaps = 1;
    ProportionalPictorialSymbol = 0;
    FlowMap = 0;
    RingMaps = 1;
    LineMap = 0;
    PointMap = 0;
    DotDensityMap = 0;
    Heatmap = 0;
    HeatPointMap = 0;
    ConnectionMap = 0;
    Choropleth = 0;
    HeatMapAdditionalMap = 0;
    LineGraph = 0;
    Scatterplot = 0;
    Barchart = 0;
    StackedBarchart = 1;
    StackedAreaChart = 0;
    BubbleChart = 0;
    SpiralPlot = 0;
    EventStacks = 0;
    TemporalFocus = 1;
    HeatmapWithoutMap = 0;
    checkDeactivation(groups: CategoryGroup[]): void { }
}
