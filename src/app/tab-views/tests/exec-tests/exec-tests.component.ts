import { Component, OnInit } from '@angular/core';
import {TestsService} from '../services/tests.service';

@Component({
  selector: 'app-exec-tests',
  templateUrl: './exec-tests.component.html',
  styleUrls: ['./exec-tests.component.scss']
})
export class ExecTestsComponent implements OnInit {

  testItems = [];
  showAnswers = false;
  testEnd = false;
  get hasTestItems() {
    return this.testItems && this.testItems.length > 0;
  }
  get testResults(): number {
    return this.testEnd && this.testsService.getTestResults();
  }
  constructor(private testsService: TestsService) { }

  ngOnInit() {
    this.createTests();
  }

  createTests() {
    console.log('creating tests');
    console.log(this.testsService.getAllTests());
    this.testItems = this.testsService.getRandomTestGroup(5);
  }

  sendBtnClickHandler() {
    this.testEnd = true;
    this.showAnswers = true;
    console.log(`Результаты теста: ${this.testResults}`);
    console.log(this.testsService.tests);
  }

}
