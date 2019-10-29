import {Component, Input, OnInit} from '@angular/core';
import {tabAnim} from '../../animations/app.animations';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.scss'],
  animations: [tabAnim()]
})
export class TheoryComponent implements OnInit {
  @Input() isActive;
  constructor() { }

  ngOnInit() {
  }

}
