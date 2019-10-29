import {Component, Input, OnInit} from '@angular/core';
import {ipcRenderer} from 'electron';
import {tabAnim} from '../../animations/app.animations';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
  animations: [tabAnim()]
})
export class AdministrationComponent implements OnInit {
  @Input() isActive;
  constructor() { }

  ngOnInit() {
  }

  openNew() {
    console.log('start');
    ipcRenderer.send('myopen');
  }
}
