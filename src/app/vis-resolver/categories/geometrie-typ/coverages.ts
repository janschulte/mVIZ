import { CategoryEntry } from '../../model';

export class Coverages implements CategoryEntry {
    label = 'Coverages (Raster, TIN)';
    description = '';
    ThreeDVases = 1;
    PencilIconsOnMap = 1;
    HelixIconsOnMap = 1;
    Wakame = 1;
    GeoTime = 1;
    TrajectoryWall = 0;
    DensityTrajectoryWall = 0;
    TimeVaryingHierarchiesOnMaps = 1;
    ProportionalPictorialSymbol = 1;
    FlowMap = 0;
    RingMaps = 0;
    LineMap = 0;
    PointMap = 1;
    DotDensityMap = 0;
    Heatmap = 1;
    HeatPointMap = 0;
    ConnectionMap = 0;
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
    TemporalFocus = 0;
    HeatmapWithoutMap = 1;
}