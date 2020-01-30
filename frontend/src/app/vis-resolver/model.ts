export interface CategoryEntry {
    label: string;
    description: string;
    ThreeDVases: number;
    PencilIconsOnMap: number;
    HelixIconsOnMap: number;
    Wakame: number;
    GeoTime: number;
    TrajectoryWall: number;
    DensityTrajectoryWall: number;
    TimeVaryingHierarchiesOnMaps: number;
    ProportionalPictorialSymbol: number;
    FlowMap: number;
    RingMaps: number;
    LineMap: number;
    PointMap: number;
    DotDensityMap: number;
    Heatmap: number;
    HeatPointMap: number;
    ConnectionMap: number;
    Choropleth: number;
    HeatMapAdditionalMap: number;
    LineGraph: number;
    Scatterplot: number;
    Barchart: number;
    StackedBarchart: number;
    StackedAreaChart: number;
    BubbleChart: number;
    SpiralPlot: number;
    EventStacks: number;
    TemporalFocus: number;
    HeatmapWithoutMap: number;
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
    HeatMapAdditionalMap = 'Heatmap (plut Karte)',
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
    categoryEntriesSelection: CategoryEntrySelection[];
}

export interface CategoryEntrySelection {
    entry: CategoryEntry;
    selected: boolean;
}

export interface Visualisation {
    key: string;
    label: string;
    score: number;
}
