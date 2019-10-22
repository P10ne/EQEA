import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {IListItem} from '../list-item/list-item.component';
import {ITestListItem} from '../editable-test-list-item/editable-test-list-item.component';

@Component({
  selector: 'app-editable-test-list',
  templateUrl: './editable-test-list.component.html',
  styleUrls: ['./editable-test-list.component.scss']
})
export class EditableTestListComponent extends ListComponent {
  @Input() listData: ITestListItem[];
  @Output() setRightEmitter = new EventEmitter<string>();
}
