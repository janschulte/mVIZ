import { CategoryEntry, CategoryGroup } from '../../model';

export class Dynamic extends CategoryEntry {
    label = 'Dynamisch';
    description = 'Abbildung von Veränderungen z.B. durch Animation oder Interaktion (z.B. Timeslider)';
    selected = false;
    disabled = false;
    ThreeDVases = 0;
    PencilIconsOnMap = 0;
    HelixIconsOnMap = 0;
    Wakame = 0;
    GeoTime = 0;
    TrajectoryWall = 0;
    DensityTrajectoryWall = 0;
    TimeVaryingHierarchiesOnMaps = 1;
    ProportionalPictorialSymbol = 1;
    FlowMap = 1;
    RingMaps = 0;
    LineMap = 1;
    PointMap = 0;
    DotDensityMap = 1;
    Heatmap = 1;
    HeatPointMap = 1;
    ConnectionMap = 0;
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
    checkDeactivation(groups: CategoryGroup[]): void { }
}
