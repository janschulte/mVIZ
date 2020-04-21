import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { forkJoin, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Metadata } from '../services/metadata-interface.service';
import { DimensionCG } from './categories/dimension/group';
import { FocusCG } from './categories/focus/group';
import { GeometryTypeCG } from './categories/geometrie-typ/group';
import { LevelOfMeasurementCG } from './categories/level-of-measurement/group';
import { SpatialOverlappingOfThemesCG } from './categories/spatial-overlapping/group';
import { ThematicVariableCG } from './categories/thematic-variables/group';
import { TimeModelCG } from './categories/time-model/group';
import { TimeOverlappingOfThemesCG } from './categories/time-overlapping/group';
import { TimePrimitiveCG } from './categories/time-primitive/group';
import { TimeSequenceCG } from './categories/time-sequence/group';
import { CategoryGroup, Visualisation, VisualisationKey, VisualisationLabel } from './model';

@Injectable({
  providedIn: 'root'
})
export class VisResolverService {

  public groups: CategoryGroup[] = [];

  public changedVisualizations: ReplaySubject<Visualisation[]> = new ReplaySubject(1);

  private calculatedVisualisations: Visualisation[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public init(metadata: Metadata) {
    this.groups = [];
    this.calculatedVisualisations = [];
    this.groups.push(new ThematicVariableCG());
    this.groups.push(new TimeOverlappingOfThemesCG());
    this.groups.push(new SpatialOverlappingOfThemesCG());
    this.groups.push(new LevelOfMeasurementCG());
    this.groups.push(new GeometryTypeCG());
    this.groups.push(new FocusCG());
    this.groups.push(new TimePrimitiveCG());
    this.groups.push(new TimeModelCG());
    this.groups.push(new TimeSequenceCG());
    this.groups.push(new DimensionCG());

    if (metadata) {
      this.setSelection(metadata.focus, FocusCG);
      this.setSelection(metadata.geometryType, GeometryTypeCG);
      this.setSelection(metadata.scaleOfMeasure, LevelOfMeasurementCG);
      this.setSelection(metadata.spatialOverlay, SpatialOverlappingOfThemesCG);
      this.setSelection(metadata.temporalOverlay, TimeOverlappingOfThemesCG);
      this.setSelection(metadata.thematicVariables, ThematicVariableCG);
      this.setSelection(metadata.timePrimitive, TimePrimitiveCG);
    }

    this.createVis();
  }

  setSelection(metadataParam: string[], categoryGroupType: Type<CategoryGroup>) {
    const metaDataParam = this.getMetadataParam(metadataParam);
    const group = this.groups.find(e => e instanceof categoryGroupType);
    const entry = group.categoryEntries.find(e => e.metadataLink === metaDataParam);
    if (entry) {
      entry.selected = true;
    } else {
      console.error(`Doesn't find param '${metadataParam}' in group ${group.constructor.name}`);
    }
  }

  public loadHtml(key: string) {
    console.log(key);
  }

  private createVis() {
    const req = [];
    for (const key in VisualisationKey) {
      if (key) {
        req.push(
          this.http.get(`/assets/vis/${key}.html`, { responseType: 'text' }).pipe(tap(
            res => {
              this.calculatedVisualisations.push({
                key,
                label: VisualisationLabel[key],
                html: res,
                score: 0
              });
            },
            error => {
              this.calculatedVisualisations.push({
                key,
                label: VisualisationLabel[key],
                html: null,
                score: 0
              });
            }
          ))
        );
      }
    }

    forkJoin(req).subscribe(
      () => this.calculateVisList(),
      () => this.calculateVisList()
    );
  }

  public calculateVisList() {
    this.checkDeactivations();
    const selectCount = this.countSelections();
    // iterate visualisations
    this.calculatedVisualisations.forEach(vis => {
      const sum = this.sumForVisualization(vis);
      vis.score = 100 * sum / selectCount;
      if (isNaN(vis.score)) { vis.score = 100; }
    });
    this.changedVisualizations.next(this.calculatedVisualisations);
  }

  private sumForVisualization(vis: Visualisation) {
    let sum = 0;
    this.groups.forEach(group => {
      group.categoryEntries.forEach(entry => {
        if (entry.selected && !entry.disabled) {
          sum += entry[vis.key];
        }
      });
    });
    return sum;
  }

  private countSelections() {
    let selectCount = 0;
    this.groups.forEach(g => g.categoryEntries.forEach(e => selectCount += e.selected && !e.disabled ? 1 : 0));
    return selectCount;
  }

  public checkDeactivations() {
    console.log(`Check category deactivations`);
    this.groups.forEach(group => {
      group.categoryEntries.forEach(entry => {
        entry.checkDeactivation(this.groups);
      });
    });
  }

  private getMetadataParam(metadataParam: string[]) {
    return (metadataParam instanceof Array && metadataParam.length === 1) ? metadataParam[0] : null;
  }

}
