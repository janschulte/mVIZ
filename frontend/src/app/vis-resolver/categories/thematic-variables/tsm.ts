import { CategoryEntry } from '../../model';

export class TsM implements CategoryEntry {
    label = 'TS-m';
    description = 'Räumlich, Zeitlich, X zusätzliche Variable';
    ThreeDVases = 1;
    PencilIconsOnMap = 1;
    HelixIconsOnMap = 1;
    Wakame = 1;
    GeoTime = 1;
    TrajectoryWall = 1;
    DensityTrajectoryWall = 0;
    TimeVaryingHierarchiesOnMaps = 0;
    ProportionalPictorialSymbol = 0;
    FlowMap = 0;
    RingMaps = 1;
    LineMap = 1;
    PointMap = 1;
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
    BubbleChart = 1;
    SpiralPlot = 0;
    EventStacks = 1;
    TemporalFocus = 0;
    HeatmapWithoutMap = 0;
}
