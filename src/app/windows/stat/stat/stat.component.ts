import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {ElectronService} from '../../../core/services';
import {MapService} from '../../../services/map/map.service';
import {IsolinesService} from '../../../services/map/isolines.service';
import {IsoareasService} from '../../../services/map/isoareas.service';
import {EpicenterService} from '../../../services/map/epicenter.service';
import {OverlaysService} from '../../../services/map/overlays.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
  providers: [MapService, IsolinesService, IsoareasService, EpicenterService]
})
export class StatComponent implements OnInit {

  addingTimeMarkActive = false;
  @ViewChild('olPopupTemplate', {static: true}) olPopup;

  constructor(
    private electronService: ElectronService,
    private assessmentService: MapService,
    private overlayService: OverlaysService
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

  addTimeMarkBtnClk() {
    this.addingTimeMarkActive ?
    this.assessmentService.map.removeEventListener('click', this.addTimeMarkHandler) :
    this.assessmentService.map.addEventListener('click', this.addTimeMarkHandler);
  }
  addTimeMarkHandler = (evt) => {
    const timeMarkOverlay = this.overlayService.createTimeMarkOverlay('12:30', this.olPopup);
    timeMarkOverlay.setPosition(evt.coordinate);
    console.log(timeMarkOverlay);
    this.assessmentService.addOverlay(timeMarkOverlay);
  }

}
