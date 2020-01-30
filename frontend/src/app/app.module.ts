import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelgolandCoreModule } from '@helgoland/core';
import { HelgolandOpenLayersModule } from '@helgoland/open-layers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AscertainVisualizationComponent } from './components/ascertain-visualization/ascertain-visualization.component';
import { DistributionFacetComponent } from './components/distribution-facet/distribution-facet.component';
import { SearchResultListComponent } from './components/search-result-list/search-result-list.component';
import { GeojsonMapComponent } from './components/visualizations/geojson-map/geojson-map.component';
import { WmsMapComponent } from './components/visualizations/wms-map/wms-map.component';
import { DetailsComponent } from './views/details/details.component';
import { SandboxComponent } from './views/sandbox/sandbox.component';
import { SearchComponent } from './views/search/search.component';
import { CategoryGroupComponent } from './vis-resolver/components/category-group/category-group.component';
import { VisResolverComponent } from './vis-resolver/components/vis-resolver/vis-resolver.component';
import { ScorePipePipe } from './vis-resolver/score-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AscertainVisualizationComponent,
    DetailsComponent,
    DistributionFacetComponent,
    GeojsonMapComponent,
    SearchComponent,
    SearchResultListComponent,
    WmsMapComponent,
    SandboxComponent,
    CategoryGroupComponent,
    VisResolverComponent,
    ScorePipePipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HelgolandCoreModule,
    HelgolandOpenLayersModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
