import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsVisResolverComponent } from './views/details-vis-resolver/details-vis-resolver.component';
import { DetailsComponent } from './views/details/details.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'details/:id/resolver/:file',
    component: DetailsVisResolverComponent
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
