import { DimensionCG } from './categories/dimension/group';
import { TimeSequenceCG } from './categories/time-sequence/group';
import { TimeModelCG } from './categories/time-model/group';
import { FocusCG } from './categories/focus/group';
import { Injectable } from '@angular/core';

import { GeometryTypeCG } from './categories/geometrie-typ/group';
import { LevelOfMeasurementCG } from './categories/level-of-measurement/group';
import { SpatialOverlappingOfThemesCG } from './categories/spatial-overlapping/group';
import { ThematicVariableCG } from './categories/thematic-variables/group';
import { TimeOverlappingOfThemesCG } from './categories/time-overlapping/group';
import { TimePrimitiveCG } from './categories/time-primitive/group';
import { CategoryGroup, Visualisation, VisualisationKey, VisualisationLabel } from './model';

@Injectable({
  providedIn: 'root'
})
export class VisResolverService {

  public groups: CategoryGroup[] = [];

  public calculatedVisualisations: Visualisation[] = [];

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
    this.checkDeactivations();
  }

  public calculateVisList() {
    this.checkDeactivations();
    // iterate visualisations
    this.calculatedVisualisations.forEach(vis => {
      vis.score = 0;
      this.groups.forEach(group => {
        group.categoryEntries.forEach(entry => {
          if (entry.selected && !entry.disabled) {
            vis.score += entry[vis.key];
          }
        });
      });
    });
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
