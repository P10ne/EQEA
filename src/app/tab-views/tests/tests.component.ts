import {Component, Input, OnInit} from '@angular/core';
import {TestsService} from '../../services/tests.service';
import {tabAnim} from '../../animations/app.animations';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
  animations: [tabAnim()]
})
export class TestsComponent implements OnInit {
  @Input() isActive;
  constructor() { }

  ngOnInit() {
  }

}
