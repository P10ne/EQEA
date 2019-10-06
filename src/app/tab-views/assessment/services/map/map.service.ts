import { Injectable } from '@angular/core';

import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import {GeoJSON} from 'ol/format';
import {Vector} from 'ol/source';
import {transform} from 'ol/proj';
import {EpicenterInterface} from '../../interfaces/epicenter.interface';
import {SourceNamesEnum} from '../../enums/sourceNames.enum';
import {IsolinesService} from './isolines.service';
import {IsoareasService} from './isoareas.service';
import {EpicenterService} from './epicenter.service';

import {getIsoLineStyle} from './labels.styles';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: Map;
  epicenter: EpicenterInterface;
  layers;
  sources;
  format;
  constructor(private isoLinesService: IsolinesService,
              private isoAreasService: IsoareasService,
              private epicenterService: EpicenterService) { }

  initMap(): void {

    this.sources = [
      new OSM(), // Тайлы карт
      new Vector(), // Изосейсты
      new Vector(), // Зоны бальности
      new Vector() // Эпицентр
    ]

    // В соответствии с sources
    this.layers = [
      new TileLayer({ source: this.sources[SourceNamesEnum.tiles] }),
      new VectorLayer({source: this.sources[SourceNamesEnum.isoLines], style: getIsoLineStyle}),
      new VectorLayer({source: this.sources[SourceNamesEnum.isoAreas]}),
      new VectorLayer({source: this.sources[SourceNamesEnum.epicenter]})
    ];

    this.map = new Map({
      target: 'map',
      layers: this.layers,
      view: new View({
        center: transform([88, 58], 'EPSG:4326', 'EPSG:3857'),
        zoom: 4
      })
    });
    this.format = new GeoJSON();
  }

  setEpicenterClickListener() {
    this.map.addEventListener('click', this.setEpicenter);
  }

  setEpicenter = (event) => {
    this.map.removeEventListener('click', this.setEpicenter);
    this.reset();
    const epicenter = this.epicenterService.getEpicenter(event.coordinate);
    this.sources[SourceNamesEnum.epicenter].addFeature(epicenter.olPoint);

    this.createIsoLines();
    this.createIsoAreas();
  }

  createIsoLines() {
    const isoLineFeatures = this.isoLinesService.getOLIsoLines({coords: this.epicenterService.getCurrentCoords(), depth: 0, magnitude: 0});
    this.sources[SourceNamesEnum.isoLines].addFeatures(isoLineFeatures);
  }

  createIsoAreas() {
    const isoAreaFeatures = this.isoAreasService.getOLIsoAreas({coords: this.epicenterService.getCurrentCoords(), depth: 0, magnitude: 0});
    this.sources[SourceNamesEnum.isoAreas].addFeatures(isoAreaFeatures);
  }



  reset() {
    this.resetEpicenter();
    this.resetIsoLines();
    this.resetIsoAreas();
  }
  resetEpicenter() {
    this.sources[SourceNamesEnum.epicenter].clear();
    this.epicenter = null;
  }
  resetIsoLines() {
    this.sources[SourceNamesEnum.isoLines].clear();
  }
  resetIsoAreas() {
    this.sources[SourceNamesEnum.isoAreas].clear();
  }



  setLayerVisibleState(layer: SourceNamesEnum, state: boolean) {
    this.layers[layer].setVisible(state);
    this.layers[layer].changed();
  }



}
