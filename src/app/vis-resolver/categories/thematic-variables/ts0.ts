import { CategoryEntry, CategoryGroup } from '../../model';

export class Ts0 extends CategoryEntry {
    label = 'TS-0';
    metadataLink = 'TS-0';
    description = 'Räumlich, Zeitlich';
    selected = false;
    disabled = false;
    ThreeDVases = 0;
    PencilIconsOnMap = 0;
    HelixIconsOnMap = 0;
    Wakame = 0;
    GeoTime = 1;
    TrajectoryWall = 0;
    DensityTrajectoryWall = 1;
    TimeVaryingHierarchiesOnMaps = 0;
    ProportionalPictorialSymbol = 0;
    FlowMap = 0;
    RingMaps = 1;
    LineMap = 1;
    PointMap = 0;
    DotDensityMap = 1;
    Heatmap = 1;
    HeatPointMap = 1;
    ConnectionMap = 1;
    Choropleth = 0;
    HeatMapAdditionalMap = 0;
    LineGraph = 0;
    Scatterplot = 0;
    Barchart = 0;
    StackedBarchart = 0;
    StackedAreaChart = 0;
    BubbleChart = 0;
    SpiralPlot = 0;
    EventStacks = 0;
    TemporalFocus = 1;
    HeatmapWithoutMap = 0;
    checkDeactivation(groups: CategoryGroup[]): void { }
}
