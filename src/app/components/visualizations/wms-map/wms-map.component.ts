import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { OlMapService, WmsCapabilitiesService, WMSLayer } from '@helgoland/open-layers';
import * as ol from 'ol';
import TileLayer from 'ol/layer/Tile';
import { TileWMS } from 'ol/source';

import { HttpProxyService } from '../../../services/http-proxy.service';
import { Distribution } from '../../../shared/dataset';

@Component({
  selector: 'app-wms-map',
  templateUrl: './wms-map.component.html',
  styleUrls: ['./wms-map.component.scss']
})
export class WmsMapComponent implements OnInit {

  @Input() distribution: Distribution;

  public show: boolean;

  public mapId = 'geojson';

  public projection = 'EPSG:3857';

  private zoomToLayer = false;

  private loadingTiles = 0;
  private loadedTiles = 0;
  public progress = 100;

  public treeControl = new NestedTreeControl<WMSLayer>(node => node.childLayer);
  public dataSource = new MatTreeNestedDataSource<WMSLayer>();

  private layers: Map<string, TileLayer> = new Map();

  constructor(
    private wmsCap: WmsCapabilitiesService,
    private mapService: OlMapService,
    private snackBar: MatSnackBar,
    private proxy: HttpProxyService
  ) { }

  ngOnInit(): void { }

  hasChild = (_: number, node: WMSLayer) => {
    return !!node.childLayer && node.childLayer.length > 0;
  }

  public showMap() {
    this.show = !this.show;
    if (this.show) { this.loadWMS(); }
  }

  public toggleLayer(layer: WMSLayer, selected: boolean) {
    this.mapService.getMap(this.mapId).subscribe(map => {
      if (selected) {
        // add to map
        if (this.zoomToLayer) {
          this.wmsCap.getExtent(layer.name, this.proxy.proxyfyUrl(this.distribution.accessURL), this.projection)
            .subscribe(
              extent => map.getView().fit(extent.extent),
              error => this.handleError(error),
              () => this.addLayer(layer, map)
            );
        } else {
          this.addLayer(layer, map);
        }
      } else {
        // remove from map
        map.removeLayer(this.layers.get(layer.name));
        this.layers.delete(layer.name);
      }
    });
  }

  private handleError(error: any) {
    console.error(error);
    const message = error.error && error.error.text ? error.error.text : JSON.stringify(error);
    this.snackBar.open(message, null, { duration: 5000 });
  }

  private addLayer(layer: WMSLayer, map: ol.Map) {
    const tileLayer = new TileLayer({
      visible: true,
      source: new TileWMS({
        url: this.cleanUpUrl(),
        params: {
          Layers: layer.name
        }
      })
    });
    this.progress = 0;
    this.loadedTiles = 0;
    this.loadingTiles = 0;
    tileLayer.getSource().on('tileloadstart', () => this.loadingTiles += 1);
    tileLayer.getSource().on('tileloadend', () => {
      this.loadedTiles += 1;
      this.progress = this.loadedTiles / this.loadingTiles * 100;
    });
    tileLayer.getSource().on('tileloaderror', () => {
      this.loadedTiles += 1;
      this.progress = this.loadedTiles / this.loadingTiles * 100;
    });
    this.layers.set(layer.name, tileLayer);
    map.addLayer(tileLayer);
  }

  private cleanUpUrl(): string {
    const url = this.distribution.accessURL.toLocaleLowerCase();
    return url.substring(0, url.lastIndexOf('?'));
  }

  private loadWMS() {
    this.wmsCap.getLayerTree(this.proxy.proxyfyUrl(this.distribution.accessURL)).subscribe(
      res => this.dataSource.data = res.childLayer,
      error => this.handleError(error)
    );
  }

}
