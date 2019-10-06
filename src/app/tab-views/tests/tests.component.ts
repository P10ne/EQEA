import { Component, OnInit } from '@angular/core';
import {TestsService} from './services/tests.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
