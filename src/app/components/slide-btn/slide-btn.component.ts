import {Component, Input, OnInit} from '@angular/core';

export interface SlideBtnInterface {
  textVal: string;
}

@Component({
  selector: 'app-slide-btn',
  templateUrl: './slide-btn.component.html',
  styleUrls: ['./slide-btn.component.scss']
})
export class SlideBtnComponent implements OnInit {
  @Input() values: SlideBtnInterface[];
  title: string;

  constructor() { }

  ngOnInit() {
  }
}
