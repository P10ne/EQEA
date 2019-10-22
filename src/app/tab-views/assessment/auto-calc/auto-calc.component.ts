import { Component, OnInit } from '@angular/core';
import {MapService} from '../../../services/map/map.service';
import {MathService} from '../services/math.service';
import {ElectronService} from '../../../core/services';
import {EpicenterService} from '../../../services/map/epicenter.service';
import {IsolinesService} from '../../../services/map/isolines.service';
import {IsoareasService} from '../../../services/map/isoareas.service';
import {getIsoLineStyle} from '../../../services/map/labels.styles';



@Component({
  selector: 'app-auto-calc',
  templateUrl: './auto-calc.component.html',
  styleUrls: ['./auto-calc.component.scss']
})
export class AutoCalcComponent implements OnInit {

  sideNavIsOpen = false;
  magnitude = 0;
  depth = 0;

  mapData = {
    epicenter: null,
    isoLines: null,
    isoAreas: null
  };

  constructor(
    private electronService: ElectronService,
    private assessmentService: MapService,
    private math: MathService,
    private epicenterService: EpicenterService,
    private isoLinesService: IsolinesService,
    private isoAreaService: IsoareasService,
  ) { }

  ngOnInit() {
    this.assessmentService.initMap({});
    this.assessmentService.epicenterSeted.subscribe((coordinates) => {
      this.mapData.epicenter = this.assessmentService.addLayer([this.epicenterService.getEpicenter(coordinates).olPoint]);
      this.mapData.isoLines = this.assessmentService.addLayer(this.isoLinesService.getOLIsoLines({magnitude: this.magnitude, depth: this.depth, coords: coordinates}));
      this.mapData.isoLines.layer.setStyle(getIsoLineStyle);
      this.mapData.isoAreas = this.assessmentService.addLayer(this.isoAreaService.getOLIsoAreas({magnitude: this.magnitude, depth: this.depth, coords: coordinates}));
    });
  }

  setSideNavState(isOpen: boolean) {
    this.sideNavIsOpen = isOpen;
  }

  selectEpicenterBtnHandler() {
    this.reset();
    this.math.setMagnitude(this.magnitude);
    this.math.setDepth(this.depth);
    this.closeMenu();
    this.assessmentService.setEpicenterClickListener();
  }

  closeMenu() {
    this.setSideNavState(false);
  }

  reset() {
    this.magnitude = 0;
    this.math.setMagnitude(0);
    this.depth = 0;
    this.math.setDepth(0);
    for (const mapLayersKey in this.mapData) {
      if (this.mapData[mapLayersKey]) {
        this.mapData[mapLayersKey].source.clear();
      }
    }
  }

  layerCheckboxChangeHandler(event) {
    this.setLayerVisibleState(event.target.dataset.sourceNameVal, event.target.checked);
  }

  setLayerVisibleState(layer: string, state) {
    this.mapData[layer].layer.setVisible(state);
    this.mapData[layer].layer.changed();
  }

  openStat() {
    this.electronService.ipcRenderer.send('openStat');
  }
}
