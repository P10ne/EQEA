import { Component, OnInit } from '@angular/core';
import {IListItem} from '../../../components/list-item/list-item.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  teachers: IListItem[];
  students: IListItem[];
  constructor() { }

  ngOnInit() {
    this.teachers = [{title: 'Преподаватель 1'}, {title: 'Преподаватель 2'}];
    this.students = [{title: 'Студент 1'}, {title: 'Студент 2'}];
  }

}
