import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListItemComponent} from '../list-item/list-item.component';

export interface ITestListItem {
  id?: string;
  title: string;
  isEditable?: boolean;
  isSelectable?: boolean;
  isDeletable?: boolean;
  isRight?: boolean;
}

@Component({
  selector: 'app-editable-test-list-item',
  templateUrl: './editable-test-list-item.component.html',
  styleUrls: ['./editable-test-list-item.component.scss']
})
export class EditableTestListItemComponent extends ListItemComponent {
  @Input() isRight = false;
  @Output() setRightEmitter = new EventEmitter<string>();

  setRight() {
    this.setRightEmitter.emit(this.id);
  }

}
