import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OlMapService } from '@helgoland/open-layers';
import { Map as OlMap } from 'ol';
import { click } from 'ol/events/condition';
import GeoJSON from 'ol/format/GeoJSON';
import { Select } from 'ol/interaction';
import { Layer } from 'ol/layer';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Circle, Fill, Stroke, Style } from 'ol/style';

import { Distribution } from '../../../../../../backend/src/shared/dataset';
import { HttpProxyService } from './../../../http-proxy.service';

@Component({
  selector: 'app-geojson-map',
  templateUrl: './geojson-map.component.html',
  styleUrls: ['./geojson-map.component.scss']
})
export class GeojsonMapComponent {

  @Input() distribution: Distribution;

  public geojson: Layer;

  public show: boolean;

  public mapId = 'geojson';

  public properties: Map<string, string>;

  constructor(
    private proxy: HttpProxyService,
    private mapService: OlMapService,
    private snackBar: MatSnackBar
  ) { }

  public showGeojson() {
    this.show = !this.show;
    if (this.show) { this.loadLayer(); }
  }

  private loadLayer() {
    this.proxy.get(this.distribution.accessURL).subscribe(res => {
      const vectorSource = new VectorSource({
        features: (new GeoJSON()).readFeatures(res)
      });
      this.geojson = new VectorLayer({
        source: vectorSource,
        style: feature => this.styleFunction()
      });
      this.mapService.getMap(this.mapId).subscribe(map => {
        const extent = vectorSource.getExtent();
        map.getView().fit(extent);
        this.createClickInteraction(map);
      });
    }, error => {
      console.error(error);
      const message = error.error && error.error.text ? error.error.text : JSON.stringify(error);
      this.snackBar.open(message, null, { duration: 5000 });
    });
  }

  private createClickInteraction(map: OlMap) {
    const clickSelect = new Select({
      condition: click,
      // style: feature => this.cluster ? this.styleClusterLayer(feature) : this.createMarkerStyle(),
      layers: [this.geojson]
    });
    clickSelect.on('select', (evt => {
      this.properties = new Map();
      if (evt.selected.length === 1) {
        const props = evt.selected[0].getProperties();
        for (const key in props) {
          if (props.hasOwnProperty(key)) {
            const element = props[key];
            if (typeof (element) === 'string') {
              this.properties.set(key, element);
            }
          }
        }
      }
    }));
    map.addInteraction(clickSelect);
  }

  private styleFunction(): Style | Style[] {
    return [
      new Style({
        image: new Circle({
          radius: 5,
          fill: new Fill({ color: 'rgba(255, 0, 0, 0.1)' }),
          stroke: new Stroke({ color: 'red', width: 2 })
        }),
      }),
      new Style({
        stroke: new Stroke({
          color: 'red',
          width: 3
        })
      })
    ];
  }

}
