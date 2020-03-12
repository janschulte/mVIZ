import { CategoryEntry, CategoryGroup } from '../../model';

export class Time extends CategoryEntry {
    label = 'Zeitlich';
    metadataLink = 'temporal';
    description = 'Zeitliche Veränderung der Thematik, keine räumliche Veränderung (z.B. fest installierte Temperaturmessstation)';
    selected = false;
    disabled = false;
    ThreeDVases = 1;
    PencilIconsOnMap = 1;
    HelixIconsOnMap = 1;
    Wakame = 1;
    GeoTime = 0;
    TrajectoryWall = 0;
    DensityTrajectoryWall = 0;
    TimeVaryingHierarchiesOnMaps = 1;
    ProportionalPictorialSymbol = 1;
    FlowMap = 0;
    RingMaps = 0;
    LineMap = 0;
    PointMap = 1;
    DotDensityMap = 1;
    Heatmap = 0;
    HeatPointMap = 0;
    ConnectionMap = 0;
    Choropleth = 0;
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
    HeatmapWithoutMap = 0;
    checkDeactivation(groups: CategoryGroup[]): void { }
}
