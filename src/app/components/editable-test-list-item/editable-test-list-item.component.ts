import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListItemComponent} from '../list-item/list-item.component';

@Component({
  selector: 'app-editable-test-list-item',
  templateUrl: './editable-test-list-item.component.html',
  styleUrls: ['./editable-test-list-item.component.scss']
})
export class EditableTestListItemComponent extends ListItemComponent {
  isDeletable = true;
  isEditable = true;
  @Input() isRight = false;
  @Output() setRightEmitter = new EventEmitter<string>();

  setRight() {
    this.setRightEmitter.emit(this.id);
  }

}
