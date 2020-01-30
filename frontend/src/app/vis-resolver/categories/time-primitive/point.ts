import { CategoryEntry } from '../../model';

export class Point implements CategoryEntry {
    label = 'Punkt (diskreter Punkt)';
    description = 'Punktmessung';
    ThreeDVases = 1;
    PencilIconsOnMap = 0;
    HelixIconsOnMap = 0;
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
    ConnectionMap = 1;
    Choropleth = 1;
    HeatMapAdditionalMap = 1;
    LineGraph = 1;
    Scatterplot = 1;
    Barchart = 1;
    StackedBarchart = 1;
    StackedAreaChart = 1;
    BubbleChart = 1;
    SpiralPlot = 1;
    EventStacks = 1;
    TemporalFocus = 1;
    HeatmapWithoutMap = 0;
}