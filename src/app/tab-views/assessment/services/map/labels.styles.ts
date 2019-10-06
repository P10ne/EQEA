import {Style, Stroke, Fill, Text} from 'ol/style';

export function getIsoLineStyle(feature) {
  return new Style({
    stroke: new Stroke({
      color: 'red',
      width: '1'
    }),
    fill: new Fill({
      color: 'rgba(0,0,0,0.0)'
    }),
    text: new Text({
      font: 'bold 12px Verdana',
      offsetY: 7,
      placement: 'line',
      fill: new Fill({color: 'red'}),
      text: String(feature.get('score'))
    })
  });
}
