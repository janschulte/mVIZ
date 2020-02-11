export enum KeywordType {
    CATEGORY = 'mCLOUD-Kategorie',
    FKZ = 'mFUND-FKZ',
    PROJECT = 'mFUND-Projekt'
}

export enum DistributionType {
    ATOM = "ATOM",
    CSV = 'CSV',
    GEOJSON = 'GEOJSON',
    GML = "GML",
    HTML = "HTML",
    JSON = "JSON",
    KML = "KML",
    PDF = "PDF",
    REST = "REST",
    SHP = "SHP",
    TIFF = "TIFF",
    TSV = "TSV",
    TXT = "TXT",
    WFS = "WFS",
    WMS = 'WMS',
    UNKNOWN = 'UNKNOWN',
    XLS = "XLS",
    XLSX = "XLSX",
    XML = "XML",
    ZIP = 'ZIP',
}

export interface Keyword {
    type: KeywordType;
    label: string;
}

export interface Distribution {
    label?: string;
    type: DistributionType;
    accessURL: string;
    downloadURL: string;
}

export interface Dataset {
    id: string;
    title: string;
    description: string;
    provider: string;
    mfundUrl: string;
    lastModified: Date;
    keywords: Keyword[];
    distributions: Distribution[];
}
