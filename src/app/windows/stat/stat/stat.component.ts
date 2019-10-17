import { Component, OnInit } from '@angular/core';
import {ElectronService} from '../../../core/services';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  constructor(private electronService: ElectronService) {}

  ngOnInit() {
    this.electronService.ipcRenderer.on('statLoaded', (event, arg) => {
      console.log(`stat: statLoaded ${arg}`);
    });
    this.electronService.ipcRenderer.on('statSaved', (event, arg) => {
      console.log(`stat: statSaved`);
    });
    this.electronService.ipcRenderer.send('initStat');
  }



}
