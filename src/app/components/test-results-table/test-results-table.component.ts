import {Component, Input, OnInit} from '@angular/core';

interface TestResultsInterface {
  date: string;
  result: number;
}

@Component({
  selector: 'app-test-results-table',
  templateUrl: './test-results-table.component.html',
  styleUrls: ['./test-results-table.component.scss']
})
export class TestResultsTableComponent implements OnInit {
  @Input() results: TestResultsInterface[];
  constructor() { }

  ngOnInit() {
  }

}
