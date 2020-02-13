import { CategoryEntry, CategoryGroup } from '../../model';

export class Spatial extends CategoryEntry {
    label = 'Räumlich';
    description = 'Räumliche Veränderung der Thematik, keine zeitliche Veränderung (z.B. statische Phänomene, Momentaufnahme)';
    selected = false;
    disabled = false;
    ThreeDVases = 0;
    PencilIconsOnMap = 0;
    HelixIconsOnMap = 0;
    Wakame = 0;
    GeoTime = 0;
    TrajectoryWall = 0;
    DensityTrajectoryWall = 0;
    TimeVaryingHierarchiesOnMaps = 0;
    ProportionalPictorialSymbol = 0;
    FlowMap = 1;
    RingMaps = 0;
    LineMap = 0;
    PointMap = 0;
    DotDensityMap = 0;
    Heatmap = 1;
    HeatPointMap = 1;
    ConnectionMap = 1;
    Choropleth = 1;
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
