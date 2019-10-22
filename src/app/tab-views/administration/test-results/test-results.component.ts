import { Component, OnInit } from '@angular/core';
import {IListItem} from '../../../components/list-item/list-item.component';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent implements OnInit {
  data: IListItem[];
  constructor() { }

  ngOnInit() {
    this.data = [{title: 'Иванов Иван Иванович', isSelected: true}, {title: 'Иванов Иван Иванович 1'}];
  }

  onSel(newData: IListItem[]) {
    this.data = newData;
  }

}
