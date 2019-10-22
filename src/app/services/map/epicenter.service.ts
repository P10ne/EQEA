import { Injectable } from '@angular/core';
import * as Turf from '@turf/turf';

import {GeoJSON} from 'ol/format';

@Injectable()
export class EpicenterService {
  format;
  epicenter;
  constructor() {
    this.format = new GeoJSON();
  }

  getEpicenter = (coords) => {
    if (this.epicenter && this.epicenter.coords[0] === coords[0] && this.epicenter.coords[1] === coords[1]) {
      return this.epicenter;
    } else {
      const turfPoint = Turf.point(coords);
      this.epicenter = {
        coords: coords,
        turfPoint: turfPoint,
        olPoint: this.format.readFeature(turfPoint)
      };
      this.epicenter.olPoint.getGeometry().transform('EPSG:4326', 'EPSG:3857');
      return this.epicenter;
    }
  }

  getCurrentCoords(): number[] {
    return this.epicenter.coords;
  }
}
