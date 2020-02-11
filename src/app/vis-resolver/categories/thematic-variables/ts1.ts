import { CategoryEntry } from '../../model';

export class Ts1 implements CategoryEntry {
    label = 'TS-1';
    description = 'Räumlich, Zeitlich, 1 zusätzliche Variable';
    ThreeDVases = 1;
    PencilIconsOnMap = 0;
    HelixIconsOnMap = 1;
    Wakame = 0;
    GeoTime = 1;
    TrajectoryWall = 1;
    DensityTrajectoryWall = 1;
    TimeVaryingHierarchiesOnMaps = 1;
    ProportionalPictorialSymbol = 1;
    FlowMap = 1;
    RingMaps = 1;
    LineMap = 1;
    PointMap = 1;
    DotDensityMap = 0;
    Heatmap = 1;
    HeatPointMap = 1;
    ConnectionMap = 0;
    Choropleth = 1;
    HeatMapAdditionalMap = 0;
    LineGraph = 1;
    Scatterplot = 1;
    Barchart = 1;
    StackedBarchart = 0;
    StackedAreaChart = 0;
    BubbleChart = 1;
    SpiralPlot = 1;
    EventStacks = 1;
    TemporalFocus = 0;
    HeatmapWithoutMap = 0;
}
