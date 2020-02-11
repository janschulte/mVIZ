import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as xmldom from 'xmldom';
import { Dataset, Distribution, DistributionType, Keyword, KeywordType } from '../shared/dataset';

enum Namespaces {
    DCAT = 'http://www.w3.org/ns/dcat#',
    HYDRA = 'http://www.w3.org/ns/hydra/core#',
    DCTERMS = 'http://purl.org/dc/terms/',
    FOAF = 'http://xmlns.com/foaf/0.1/',
    RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
}

const MCLOUD_URL = 'https://www.mcloud.de/export/datasets';
const DATASET_COUNT = 10000;

@Injectable()
export class MCloudHarvester {

    constructor(
        private http: HttpService,
    ) { }

    public getDatasets(): Observable<Dataset[]> {
        return this.http.get(`${MCLOUD_URL}?page=1&pageSize=${DATASET_COUNT}`).pipe(map(res => {
            const doc = this.parseDocument(res.data);
            const datasets = this.parseDatasets(doc);
            console.log(`Parsed ${datasets.length} Datasets`);
            return datasets;
        }));
    }

    private parseDatasets(doc: Document): Dataset[] {
        const datasets = [];
        const ds = doc.getElementsByTagNameNS(Namespaces.DCAT, 'Dataset');
        const distributions = doc.getElementsByTagNameNS(Namespaces.DCAT, 'Distribution');
        for (let i = 0; i < ds.length; i++) {
            datasets.push(this.parseDataset(ds[i], distributions));
        }
        return datasets;
    }

    private parseDataset(elem: Element, dists: HTMLCollection): Dataset {
        const id = this.getTextContent(elem, Namespaces.DCTERMS, 'identifier');
        const title = this.getTextContent(elem, Namespaces.DCTERMS, 'title');
        const description = this.getTextContent(elem, Namespaces.DCTERMS, 'description');
        const modification = this.getTextContent(elem, Namespaces.DCTERMS, 'modified');
        const lastModified = modification ? new Date(modification) : null;
        const publisher = elem.getElementsByTagNameNS(Namespaces.DCTERMS, 'publisher');
        const provider = this.getTextContent(publisher[0], Namespaces.FOAF, 'name');
        const mfundUrl = elem.getAttributeNS(Namespaces.RDF, 'about');
        const keywords = this.parseKeywords(elem);
        const distributions = this.parseDistributions(elem, dists, mfundUrl);
        return {
            id,
            title,
            description,
            lastModified,
            keywords,
            provider,
            mfundUrl,
            distributions,
        };
    }

    private parseDistributions(elem: Element, dists: HTMLCollection, datasetlink): Distribution[] {
        const distributions: Distribution[] = [];
        const distributionLinks = elem.getElementsByTagNameNS(Namespaces.DCAT, 'distribution');
        for (let i = 0; i < distributionLinks.length; i++) {
            const link = distributionLinks[i].getAttributeNS(Namespaces.RDF, 'resource');
            const dist = this.findMatchingDistribution(link, dists, datasetlink);
            if (dist) { distributions.push(dist); }
        }
        return distributions;
    }

    private findMatchingDistribution(link: string, dists: HTMLCollection, datasetlink: string): Distribution {
        for (let i = 0; i < dists.length; i++) {
            const element = dists[i];
            const about = element.getAttributeNS(Namespaces.RDF, 'about');
            if (about === link) {
                let accessURL;
                let downloadURL;
                let type;
                const accessURLElem = element.getElementsByTagNameNS(Namespaces.DCAT, 'accessURL');
                if (accessURLElem && accessURLElem.length === 1) {
                    accessURL = accessURLElem[0].getAttributeNS(Namespaces.RDF, 'resource');
                }

                const downloadURLElem = element.getElementsByTagNameNS(Namespaces.DCAT, 'downloadURL');
                if (downloadURLElem && downloadURLElem.length === 1) {
                    downloadURL = downloadURLElem[0].getAttributeNS(Namespaces.RDF, 'resource');
                }

                const formatElem = element.getElementsByTagNameNS(Namespaces.DCTERMS, 'format');
                if (formatElem && formatElem.length === 1) {
                    const format = formatElem[0].getAttributeNS(Namespaces.RDF, 'resource');
                    type = this.parseDistributionType(format, datasetlink);
                }

                const label = this.getTextContent(element, Namespaces.DCTERMS, 'title');

                if (!type) {
                    type = DistributionType.UNKNOWN;
                }

                if (type && accessURL && downloadURL) {
                    const d: Distribution = { type, accessURL, downloadURL };
                    if (label) { d.label = label; }
                    return d;
                }
            }
        }
    }

    private parseDistributionType(typeString: string, datasetlink: string): DistributionType {
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/WMS_SRVC') >= 0) {
            return DistributionType.WMS;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/ZIP') >= 0) {
            return DistributionType.ZIP;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/HTML') >= 0) {
            return DistributionType.HTML;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/PDF') >= 0) {
            return DistributionType.PDF;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/CSV') >= 0) {
            return DistributionType.CSV;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/REST') >= 0) {
            return DistributionType.REST;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/XML') >= 0) {
            return DistributionType.XML;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/GML') >= 0) {
            return DistributionType.GML;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/KML') >= 0) {
            return DistributionType.KML;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/XLSX') >= 0) {
            return DistributionType.XLSX;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/JSON') >= 0) {
            return DistributionType.JSON;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/TIFF') >= 0) {
            return DistributionType.TIFF;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/TXT') >= 0) {
            return DistributionType.TXT;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/SHP') >= 0) {
            return DistributionType.SHP;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/TSV') >= 0) {
            return DistributionType.TSV;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/WFS_SRVC') >= 0) {
            return DistributionType.WFS;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/ATOM') >= 0) {
            return DistributionType.ATOM;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/GeoJSON') >= 0) {
            return DistributionType.GEOJSON;
        }
        if (typeString.indexOf('http://publications.europa.eu/resource/authority/file-type/XLS') >= 0) {
            return DistributionType.XLS;
        }
        console.log(`Don't parse '${typeString}' to DistributionType for '${datasetlink}'`);
    }

    private parseKeywords(elem: Element): Keyword[] {
        const keywords = [];
        const keywordElemes = elem.getElementsByTagNameNS(Namespaces.DCAT, 'keyword');
        for (let i = 0; i < keywordElemes.length; i++) {
            try {
                const textContent = keywordElemes[i].textContent;
                const splitIdx = textContent.indexOf(' ');
                const type = textContent.substring(0, splitIdx);
                const label = textContent.substring(splitIdx + 1, textContent.length);
                keywords.push(this.createKeyword(type, label));
            } catch (error) {
                console.error(`Error occured, while creating keyword ${keywordElemes[i]}`);
            }
        }
        return keywords;
    }

    createKeyword(type: string, label: string): Keyword {
        let kwt: KeywordType;
        kwt = Object.values(KeywordType).find(k => k === type) as KeywordType;
        if (!kwt) { console.error(`No keyword type found for '${type}'`); }
        return {
            type: kwt,
            label,
        };
    }

    private getTextContent(elem: Element, ns: Namespaces, elemName: string): string {
        const coll = elem.getElementsByTagNameNS(ns, elemName);
        if (coll.length === 1) {
            return coll[0].textContent;
        }
    }

    private parseDocument(res: string): Document {
        return new xmldom.DOMParser().parseFromString(res, 'text/xml');
    }
}
