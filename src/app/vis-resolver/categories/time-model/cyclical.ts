import { CategoryEntry } from '../../model';

export class Cyclical implements CategoryEntry {
    label = 'Zyklisch';
    description = 'Kreis, Zeitliche Perioden sind ersichtlich (Jahreszeiten etc.)';
    ThreeDVases = 0;
    PencilIconsOnMap = 0;
    HelixIconsOnMap = 1;
    Wakame = 0;
    GeoTime = 0;
    TrajectoryWall = 1;
    DensityTrajectoryWall = 0;
    TimeVaryingHierarchiesOnMaps = 0;
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
    StackedBarchart = 0;
    StackedAreaChart = 0;
    BubbleChart = 0;
    SpiralPlot = 1;
    EventStacks = 0;
    TemporalFocus = 0;
    HeatmapWithoutMap = 0;
}