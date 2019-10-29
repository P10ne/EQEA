import {Component, Input, OnInit} from '@angular/core';

import {MapService} from '../../services/map/map.service';
import {MathService} from './services/math.service';
import {ElectronService} from '../../core/services';
import {tabAnim} from '../../animations/app.animations';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
  animations: [tabAnim()]
})
export class AssessmentComponent implements OnInit {
  @Input() isActive;
  constructor(private electronService: ElectronService) {}

  ngOnInit() {

  }
}
