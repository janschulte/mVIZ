import { Injectable } from '@angular/core';

import { GeometryType } from './categories/geometrie-typ/group';
import { LevelOfMeasurement } from './categories/level-of-measurement/group';
import { SpatialOverlappingOfThemes } from './categories/spatial-overlapping/group';
import { ThematicVariable } from './categories/thematic-variables/group';
import { TimeOverlappingOfThemes } from './categories/time-overlapping/group';
import { CategoryGroup, Visualisation, VisualisationKey, VisualisationLabel } from './model';

@Injectable({
  providedIn: 'root'
})
export class VisResolverService {

  public groups: CategoryGroup[] = [];

  public calculatedVisualisations: Visualisation[] = [];

  constructor() {
    this.groups.push(new ThematicVariable());
    this.groups.push(new TimeOverlappingOfThemes());
    this.groups.push(new SpatialOverlappingOfThemes());
    this.groups.push(new LevelOfMeasurement());
    this.groups.push(new GeometryType());

    for (const key in VisualisationKey) {
      if (key) {
        this.calculatedVisualisations.push({
          key,
          label: VisualisationLabel[key],
          score: 0
        });
      }
    }
  }

  public calculateVisList() {
    // iterate visualisations
    this.calculatedVisualisations.forEach(vis => {
      vis.score = 0;
      this.groups.forEach(group => {
        group.categoryEntriesSelection.forEach(entry => {
          if (entry.selected) {
            vis.score += entry.entry[vis.key];
          }
        });
      });
    });
  }

}
