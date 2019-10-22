import { Component, OnInit } from '@angular/core';
import {ElectronService} from '../../../core/services';
import {MapService} from '../../../services/map/map.service';
import {IsolinesService} from '../../../services/map/isolines.service';
import {IsoareasService} from '../../../services/map/isoareas.service';
import {EpicenterService} from '../../../services/map/epicenter.service';
import {MathService} from '../../../tab-views/assessment/services/math.service';
import {BuildingsService} from '../../../services/map/buildings.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
  providers: [MapService, IsolinesService, IsoareasService, EpicenterService]
})
export class StatComponent implements OnInit {

  constructor(
    private electronService: ElectronService,
    private assessmentService: MapService,
    private epicenterService: EpicenterService,
    private isoLinesService: IsolinesService,
    private isoAreaService: IsoareasService,
    private buildingsService: BuildingsService
  ) {}

  ngOnInit() {
    this.electronService.ipcRenderer.on('statLoaded', (event, arg) => {
      console.log(`stat: statLoaded ${arg}`);
    });
    this.electronService.ipcRenderer.on('statSaved', (event, arg) => {
      console.log(`stat: statSaved`);
    });
    this.electronService.ipcRenderer.send('initStat');

    this.assessmentService.initMap({});
  }



}
