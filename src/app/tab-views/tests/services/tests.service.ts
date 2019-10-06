import {Injectable} from '@angular/core';
import {TestItemInterface} from '../interfaces/test-item.interface';
import {TestAnswerInterface} from '../interfaces/test-answer.interface';
import {TestItemAnswerStateEnum} from '../enums/testItemAnswerState.enum';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  tests: TestItemInterface[];
  constructor() { }

  getAnswerState(answer: TestAnswerInterface, index: number): TestItemAnswerStateEnum {
    if (!answer.answerId || answer.answerId === -1 || answer.answerId !== index) { return TestItemAnswerStateEnum.unknown; }
    const test = this.tests.find((item) => item.id === answer.questionId);
    return test.correctId === test.selectedAnswerId ?
      TestItemAnswerStateEnum.correct : TestItemAnswerStateEnum.incorrect;
  }

  setSelectedAnswerId(answer: TestAnswerInterface) {
    this.tests.find((item) => item.id === answer.questionId).selectedAnswerId = answer.answerId;
  }

  getAllTests(): TestItemInterface[] {
    return [
      {
        id: 1,
        question: 'Вопрос 1',
        answers: [{value: 'Ответ 1', id: 1}, {value: 'Ответ 2', id: 2}, {value: 'Ответ 3', id: 3}, {value: 'Ответ 4', id: 4}],
        correctId: 1,
        selectedAnswerId: -1
      },
      {
        id: 2,
        question: 'Вопрос 2',
        answers: [{value: 'Ответ 1', id: 1}, {value: 'Ответ 2', id: 2}, {value: 'Ответ 3', id: 3}, {value: 'Ответ 4', id: 4}],
        correctId: 2,
        selectedAnswerId: -1
      },
      {
        id: 3,
        question: 'Вопрос 3',
        answers: [{value: 'Ответ 1', id: 1}, {value: 'Ответ 2', id: 2}, {value: 'Ответ 3', id: 3}, {value: 'Ответ 4', id: 4}],
        correctId: 3,
        selectedAnswerId: -1
      },
      {
        id: 4,
        question: 'Вопрос 4',
        answers: [{value: 'Ответ 1', id: 1}, {value: 'Ответ 2', id: 2}, {value: 'Ответ 3', id: 3}, {value: 'Ответ 4', id: 4}],
        correctId: 3,
        selectedAnswerId: -1
      },
    ];
  }

  getRandomTestGroup(count) {
    this.tests = this.getAllTests();
    return this.tests;
  }

  getTestResults(): number {
    let correctTestCount = 0;
    this.tests.forEach((item) => {
      if (item.selectedAnswerId === item.correctId) {
        correctTestCount++;
      }
    });
    const result = correctTestCount / this.tests.length * 100;
    return result;
  }
}
