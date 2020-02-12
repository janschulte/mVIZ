import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './views/details/details.component';
import { SearchComponent } from './views/search/search.component';
import { VisualizationSupporterComponent } from './views/visualization-supporter/visualization-supporter.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'visualization-supporter',
    component: VisualizationSupporterComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
