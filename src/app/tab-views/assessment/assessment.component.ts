import { Component, OnInit } from '@angular/core';

import {MapService} from '../../services/map/map.service';
import {MathService} from './services/math.service';
import {SourceNamesEnum} from './enums/sourceNames.enum';
import {ElectronService} from '../../core/services';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  constructor(private electronService: ElectronService) {}

  ngOnInit() {

  }
}
