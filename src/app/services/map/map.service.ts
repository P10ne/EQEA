import {EventEmitter, Injectable} from '@angular/core';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import {GeoJSON} from 'ol/format';
import {Vector} from 'ol/source';
import {transform} from 'ol/proj';

@Injectable()
export class MapService {
  map: Map;
  layers;
  sources;
  format;
  epicenterSeted = new EventEmitter<[number, number]>();
  constructor() { }

  initMap({center = [88, 58], zoom = 4}): void {

    this.sources = [
      new OSM() // Тайлы карт
    ];

    this.layers = [
      new TileLayer({ source: this.sources[0] })
    ];

    this.map = new Map({
      target: 'map',
      layers: this.layers,
      view: new View({
        center: transform(center, 'EPSG:4326', 'EPSG:3857'),
        zoom: zoom
      })
    });
    this.format = new GeoJSON();
  }

  setEpicenterClickListener() {
    this.map.addEventListener('click', this.setEpicenter);
  }

  setEpicenter = (event) => {
    this.map.removeEventListener('click', this.setEpicenter);
    this.epicenterSeted.emit(transform(event.coordinate, 'EPSG:3857', 'EPSG:4326'));
  }

  addLayer(features) {
    const vectorSource = new Vector();
    const vectorLayer = new VectorLayer({source: vectorSource});
    vectorSource.addFeatures(features);
    this.map.addLayer(vectorLayer);
    return {source: vectorSource, layer: vectorLayer};
  }

  addOverlay(overlay) {
    this.map.addOverlay(overlay);
  }

  removeOverlay(overlay) {
    this.map.removeOverlay(overlay);
  }
}
