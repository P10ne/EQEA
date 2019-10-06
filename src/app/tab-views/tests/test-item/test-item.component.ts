import {Component, Input, OnInit} from '@angular/core';
import {TestsService} from '../services/tests.service';
import {TestItemInterface} from '../interfaces/test-item.interface';
import {TestItemAnswerStateEnum} from '../enums/testItemAnswerState.enum';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.scss']
})
export class TestItemComponent implements OnInit {
  @Input() testItem: TestItemInterface;
  @Input() showAnswers;
  selectedAnswerId;

  getAnswerItemColor(index): string {
    console.log('log');
    if (!this.showAnswers) return '#fff';
    switch (this.getAnswerState(index)) {
      case TestItemAnswerStateEnum.unknown: return '#fff'; break;
      case TestItemAnswerStateEnum.correct: return '#28a745'; break;
      case TestItemAnswerStateEnum.incorrect: return '#f00'; break;
    }
  }



  getAnswerState(index: number): TestItemAnswerStateEnum {
    return this.testService.getAnswerState({questionId: this.testItem.id, answerId: this.selectedAnswerId}, index);
  }



  constructor(private testService: TestsService) { }

  ngOnInit() {
  }

  setSelectedAnswer(event: any) {
    this.selectedAnswerId = Number.parseInt(event.target.getAttribute('value'));
    console.log(`Выбран ответ ${this.selectedAnswerId}`);
    this.testService.setSelectedAnswerId({questionId: this.testItem.id, answerId: this.selectedAnswerId});
  }


}
