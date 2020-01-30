import { Pipe, PipeTransform } from '@angular/core';

import { Visualisation } from './model';

@Pipe({
  name: 'scorePipe',
  pure: false
})
export class ScorePipePipe implements PipeTransform {

  transform(value: Visualisation[]): any {
    const temp = value.sort((a, b) => b.score - a.score);
    return temp;
  }

}
