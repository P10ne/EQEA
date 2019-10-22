import { Injectable } from '@angular/core';
import * as Turf from '@turf/turf';

import {GeoJSON} from 'ol/format';
import {IsolinesService} from './isolines.service';

@Injectable()
export class IsoareasService {
  format;
  olIsoAreas;
  turfIsoAreas;
  params: {
    magnitude: number;
    depth: number;
    coords: number[];
  }
  constructor() {
    this.format = new GeoJSON();
  }

  isDataRelevant({magnitude, depth, coords}) {
    return magnitude === this.params.magnitude && depth === this.params.depth && coords[0] === this.params.coords[0] && coords[1] === this.params.coords[1];
  }

  getOLIsoAreas({magnitude, depth, coords}): any {
    if (this.olIsoAreas && this.isDataRelevant({magnitude, depth, coords})) {
      return this.olIsoAreas;
    } else {
      const isoLineTurfFeatures = this.getTurfIsoAreas({magnitude, depth, coords});

      const isoLineOLFeatures = isoLineTurfFeatures.map((isoLineTurfFeature) => {
        const isoLineOLFeature = this.format.readFeature(isoLineTurfFeature);
        isoLineOLFeature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
        return isoLineOLFeature;
      });

      this.params = {
        magnitude,
        depth,
        coords
      }

      this.olIsoAreas = isoLineOLFeatures;
      return isoLineOLFeatures;
    }
  }

  getTurfIsoAreas({magnitude, depth, coords}): any {
    if (this.turfIsoAreas && this.isDataRelevant({magnitude, depth, coords})) {
      return this.turfIsoAreas;
    } else {
      const isoLinesData = this.getIsoAreasData();

      const isoLineTurfFeatures = isoLinesData.map((isoLineData) => {
        return this.createTurfIsoArea({insideRadius: isoLineData.insideRad, coords: coords, outsideRadius: isoLineData.outsideRad});
      });
      this.turfIsoAreas = isoLineTurfFeatures;
      return isoLineTurfFeatures;
    }
  }

  getIsoAreasData() {
    return [
      {insideRad: 0, outsideRad: 80, score: 8}, {insideRad: 80, outsideRad: 190, score: 7},  {insideRad: 190, outsideRad: 330, score: 6}
    ];
  }

  createTurfIsoArea({insideRadius, outsideRadius, coords}) {
    const olIsoCircle = this.createTurfIsoFeature(coords, insideRadius, outsideRadius);
    return olIsoCircle;
  }

  createTurfIsoFeature(coords: number[], insideRad: number, outsideRad: number) {
    const options = {units: 'kilometers'};
    // @ts-ignore
    const turfOutsideCircle = Turf.circle(coords, outsideRad, options);
    let turfIsoArea;

    if (insideRad !== 0) {
      // @ts-ignore
      const turfInsideCircle = Turf.circle(coords, insideRad, options);
      turfIsoArea = Turf.mask(turfOutsideCircle, turfInsideCircle);
    } else {
      turfIsoArea = turfOutsideCircle;
    }
    return turfIsoArea;
  }
}
