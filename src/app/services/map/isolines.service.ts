import { Injectable } from '@angular/core';
import * as Turf from '@turf/turf';

import {GeoJSON} from 'ol/format';


@Injectable()
export class IsolinesService {

  format;
  olIsoLines;
  turfIsoLines;
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

  getOLIsoLines({magnitude, depth, coords}): any {
    if (this.olIsoLines && this.isDataRelevant({magnitude, depth, coords})) {
      return this.olIsoLines;
    } else {
      const isoLineTurfFeatures = this.getTurfIsoLines({magnitude, depth, coords});

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

      this.olIsoLines = isoLineOLFeatures;
      console.log(isoLineOLFeatures);
      return isoLineOLFeatures;
    }
  }

  getTurfIsoLines({magnitude, depth, coords}): any {
    if (this.turfIsoLines && this.isDataRelevant({magnitude, depth, coords})) {
      return this.turfIsoLines;
    } else {
      const isoLinesData = this.getIsoLinesData();

      const isoLineTurfFeatures = isoLinesData.map((isoLineData) => {
        return this.createTurfIso(isoLineData.radius, coords, isoLineData.score);
      });
      this.turfIsoLines = isoLineTurfFeatures;
      return isoLineTurfFeatures;
    }
  }

  getIsoLinesData() {
    return [
      {radius: 50, score: 8}, {radius: 120, score: 7}, {radius: 250, score: 6}
    ];
  }

  createTurfIso(radius: number, coords: number[], score) {
    const olIsoCircle = this.createTurfIsoFeature(coords, 0, radius, score);
    return olIsoCircle;
  }

  createTurfIsoFeature(coords: number[], insideRad: number, outsideRad: number, score: number) {
    const options = {units: 'kilometers', properties: {score}};
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
