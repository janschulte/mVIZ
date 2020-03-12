export abstract class CategoryEntry {
    abstract label: string;
    abstract metadataLink: string;
    abstract description: string;
    abstract disabled: boolean;
    abstract selected: boolean;
    abstract ThreeDVases: number;
    abstract PencilIconsOnMap: number;
    abstract HelixIconsOnMap: number;
    abstract Wakame: number;
    abstract GeoTime: number;
    abstract TrajectoryWall: number;
    abstract DensityTrajectoryWall: number;
    abstract TimeVaryingHierarchiesOnMaps: number;
    abstract ProportionalPictorialSymbol: number;
    abstract FlowMap: number;
    abstract RingMaps: number;
    abstract LineMap: number;
    abstract PointMap: number;
    abstract DotDensityMap: number;
    abstract Heatmap: number;
    abstract HeatPointMap: number;
    abstract ConnectionMap: number;
    abstract Choropleth: number;
    abstract HeatMapAdditionalMap: number;
    abstract LineGraph: number;
    abstract Scatterplot: number;
    abstract Barchart: number;
    abstract StackedBarchart: number;
    abstract StackedAreaChart: number;
    abstract BubbleChart: number;
    abstract SpiralPlot: number;
    abstract EventStacks: number;
    abstract TemporalFocus: number;
    abstract HeatmapWithoutMap: number;
    abstract checkDeactivation(groups: CategoryGroup[]): void;
}

export enum VisualisationKey {
    ThreeDVases = 'ThreeDVases',
    PencilIconsOnMap = 'PencilIconsOnMap',
    HelixIconsOnMap = 'HelixIconsOnMap',
    Wakame = 'Wakame',
    GeoTime = 'GeoTime',
    TrajectoryWall = 'TrajectoryWall',
    DensityTrajectoryWall = 'DensityTrajectoryWall',
    TimeVaryingHierarchiesOnMaps = 'TimeVaryingHierarchiesOnMaps',
    ProportionalPictorialSymbol = 'ProportionalPictorialSymbol',
    FlowMap = 'FlowMap',
    RingMaps = 'RingMaps',
    LineMap = 'LineMap',
    PointMap = 'PointMap',
    DotDensityMap = 'DotDensityMap',
    Heatmap = 'Heatmap',
    HeatPointMap = 'HeatPointMap',
    ConnectionMap = 'ConnectionMap',
    Choropleth = 'Choropleth',
    HeatMapAdditionalMap = 'HeatMapAdditionalMap',
    LineGraph = 'LineGraph',
    Scatterplot = 'Scatterplot',
    Barchart = 'Barchart',
    StackedBarchart = 'StackedBarchart',
    StackedAreaChart = 'StackedAreaChart',
    BubbleChart = 'BubbleChart',
    SpiralPlot = 'SpiralPlot',
    EventStacks = 'EventStacks',
    TemporalFocus = 'TemporalFocus',
    HeatmapWithoutMap = 'HeatmapWithoutMap'
}

export enum VisualisationLabel {
    ThreeDVases = '3D Vases',
    PencilIconsOnMap = 'Pencil Icons on map',
    HelixIconsOnMap = 'Helix Icons on map',
    Wakame = 'Wakame (3D Radar charts)',
    GeoTime = 'Geo Time',
    TrajectoryWall = 'Trajectory Wall',
    DensityTrajectoryWall = 'Density Trajectory Wall',
    TimeVaryingHierarchiesOnMaps = 'Time Varying Hierarchies on Maps',
    ProportionalPictorialSymbol = 'Wertproportionale Bildhafte Signatur (Proportional Pictorial Symbol, Mimetic Symbol)',
    FlowMap = 'Flow Map',
    RingMaps = 'Ring Maps',
    LineMap = 'Line Map (Liniennetz)',
    PointMap = 'Point Map(Proportional Circle/ Symbol Map/Bubble Map)',
    DotDensityMap = 'dot density map / Punktstreeung ',
    Heatmap = 'Heatmap (Karte)',
    HeatPointMap = 'Heat Point Map / Clustermap',
    ConnectionMap = 'Connection Map',
    Choropleth = 'Choropleth',
    HeatMapAdditionalMap = 'Heatmap (plus Karte)',
    LineGraph = 'Linegraph',
    Scatterplot = 'Scatterplot',
    Barchart = 'Barchart',
    StackedBarchart = 'Stacked Barchart',
    StackedAreaChart = 'Stacked Area Chart',
    BubbleChart = 'Bubble Chart',
    SpiralPlot = 'Spiral Plot',
    EventStacks = 'Event Stacks/Viewer',
    TemporalFocus = 'Temporal focus & Context',
    HeatmapWithoutMap = 'Heatmap (ohne Karte)'
}

export interface CategoryGroup {
    label: string;
    description: string;
    multi: boolean;
    categoryEntries: CategoryEntry[];
}

export interface Visualisation {
    key: string;
    label: string;
    score: number;
}
