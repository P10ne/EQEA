import { Component, OnInit } from '@angular/core';
import {MapService} from '../../../services/map/map.service';
import {MathService} from '../services/math.service';
import {SourceNamesEnum} from '../enums/sourceNames.enum';

@Component({
  selector: 'app-auto-calc',
  templateUrl: './auto-calc.component.html',
  styleUrls: ['./auto-calc.component.scss']
})
export class AutoCalcComponent implements OnInit {

  sideNavIsOpen = false;
  magnitude = 0;
  depth = 0;
  constructor(
    private assessmentService: MapService,
    private math: MathService
  ) { }

  ngOnInit() {
    this.assessmentService.initMap();
  }

  setSideNavState(isOpen: boolean) {
    this.sideNavIsOpen = isOpen;
  }

  selectEpicenterBtnHandler() {
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
    this.assessmentService.reset();
  }

  layerCheckboxChangeHandler(event) {
    this.setLayerVisibleState(event.target.dataset.sourceNameVal, event.target.checked);
  }

  setLayerVisibleState(layer: SourceNamesEnum, state) {
    this.assessmentService.setLayerVisibleState(layer, state);
  }

}
