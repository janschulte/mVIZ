import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

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

  constructor() {
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

    for (const key in VisualisationKey) {
      if (key) {
        this.calculatedVisualisations.push({
          key,
          label: VisualisationLabel[key],
          score: 0
        });
      }
    }
    this.calculateVisList();
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
    this.groups.forEach(g => g.categoryEntries.forEach(e => selectCount += e.selected ? 1 : 0));
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

}
