import { CategoryEntry, CategoryGroup } from '../../model';

export class Linear extends CategoryEntry {
    label = 'Linear';
    metadataLink = '';
    description = 'Linear, gerade (fortlaufende) Abfolge der Daten';
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
    ProportionalPictorialSymbol = 1;
    FlowMap = 1;
    RingMaps = 0;
    LineMap = 1;
    PointMap = 1;
    DotDensityMap = 1;
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
    HeatmapWithoutMap = 1;
    checkDeactivation(groups: CategoryGroup[]): void { }
}
