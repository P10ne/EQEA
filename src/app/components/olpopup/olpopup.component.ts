import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-olpopup',
  templateUrl: './olpopup.component.html',
  styleUrls: ['./olpopup.component.scss']
})
export class OLPopupComponent implements OnInit {
  firstWaveTime: string;
  secondWaveTime: string;
  closeEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closePopup() {
    this.closeEmitter.emit();
  }

}
