import { Component, OnInit } from '@angular/core';
import {IListItem} from '../../../components/list-item/list-item.component';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.scss']
})
export class TestEditComponent implements OnInit {
  data: IListItem[];
  constructor() { }

  ngOnInit() {
    this.data = [{id: 'Задание 1', title: 'Задание 1', isSelected: true}, {id: 'Задание 2', title: 'Задание 2'}, {id: 'Задание 3', title: 'Задание 3'}];
  }

  onSel(newData: IListItem[]) {
    this.data = newData;
  }



}
