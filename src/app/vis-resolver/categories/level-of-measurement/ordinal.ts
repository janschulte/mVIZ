import { CategoryEntry } from '../../model';

export class Ordinal implements CategoryEntry {
    label = 'Ordinal';
    description = '(qualitativ), Rangordnung, größer/kleiner etc.';
    ThreeDVases = 0;
    PencilIconsOnMap = 0;
    HelixIconsOnMap = 0;
    Wakame = 0;
    GeoTime = 0;
    TrajectoryWall = 0;
    DensityTrajectoryWall = 0;
    TimeVaryingHierarchiesOnMaps = 0;
    ProportionalPictorialSymbol = 1;
    FlowMap = 1;
    RingMaps = 0;
    LineMap = 0;
    PointMap = 1;
    DotDensityMap = 0;
    Heatmap = 0;
    HeatPointMap = 0;
    ConnectionMap = 0;
    Choropleth = 1;
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
}