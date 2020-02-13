import { CategoryEntry } from '../../model';

export class Trajectory implements CategoryEntry {
    label = 'Trajektorie – Punktabfolge mit Zeitinformation';
    description = '';
    ThreeDVases = 0;
    PencilIconsOnMap = 0;
    HelixIconsOnMap = 0;
    Wakame = 0;
    GeoTime = 1;
    TrajectoryWall = 1;
    DensityTrajectoryWall = 1;
    TimeVaryingHierarchiesOnMaps = 0;
    ProportionalPictorialSymbol = 0;
    FlowMap = 1;
    RingMaps = 1;
    LineMap = 1;
    PointMap = 0;
    DotDensityMap = 0;
    Heatmap = 1;
    HeatPointMap = 0;
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
    TemporalFocus = 0;
    HeatmapWithoutMap = 0;
}
