import { Component, OnInit } from '@angular/core';
import {ipcRenderer} from 'electron';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNew() {
    console.log('start');
    ipcRenderer.send('myopen');
  }
}
