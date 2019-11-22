export enum KeywordType {
    CATEGORY = 'mCLOUD-Kategorie',
    FKZ = 'mFUND-FKZ',
    PROJECT = 'mFUND-Projekt'
}

export interface Keyword {
    type: KeywordType;
    label: string;   
}

export interface Dataset {
    id: string;
    title: string;
    description: string;
    lastModified: Date;
    keywords: Keyword[];
}
