import { CategoryEntry, CategoryGroup } from '../../model';

export class RatioInterval extends CategoryEntry {
    label = 'Ratio/Interval';
    metadataLink = 'ratio';
    description = 'Ratio: Quantitativ, metrisch, existriert ein absoluter Nullpunkt (20 Kelvin sind doppelt so heiß wie 10K) <br> ' +
        'Interval: Quantitativ, metrisch, Rangunterschiede zwischen einzelnen Daten, kein absoluter Nullpunkt (Datum, Celsius…), ' +
        'z.b. 20 °C ist nicht doppelt so heiß wie 10 °C.';
    selected = false;
    disabled = false;
    ThreeDVases = 1;
    PencilIconsOnMap = 1;
    HelixIconsOnMap = 1;
    Wakame = 1;
    GeoTime = 0;
    TrajectoryWall = 1;
    DensityTrajectoryWall = 1;
    TimeVaryingHierarchiesOnMaps = 1;
    ProportionalPictorialSymbol = 0;
    FlowMap = 1;
    RingMaps = 1;
    LineMap = 1;
    PointMap = 1;
    DotDensityMap = 1;
    Heatmap = 1;
    HeatPointMap = 1;
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
    checkDeactivation(groups: CategoryGroup[]): void { }
}
