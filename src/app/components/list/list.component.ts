import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IListItem} from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() listData: IListItem[];
  @Input() hasSearch: boolean;
  @Input() isListDeletable: boolean;
  @Input() isListSelectable: boolean;
  @Input() isListEditable: boolean;

  @Output() selectEmitter = new EventEmitter<IListItem[]>();
  @Output() editEmitter = new EventEmitter<IListItem[]>();
  @Output() deleteEmitter = new EventEmitter<IListItem[]>();

  constructor() { }

  ngOnInit() {
  }

  unselectList() {
    const index = this.listData.findIndex((el) => el.isSelected);
    if (index > -1) {
      this.listData[index].isSelected = false;
    }
  }

  setSelected(id: string) {
    const field = this.listData[0].id ? 'id' : 'title';
    const index = this.listData.findIndex((el) => el[field] === id);
    this.listData[index].isSelected = true;
  }

  onSelected(id: string) {
    this.unselectList();
    this.setSelected(id);
    this.selectEmitter.emit(this.listData);
  }

  onDeleted(id: string) {
    this.deleteEmitter.emit(this.listData);
  }

  onEdited({id, newTitle}) {
    this.editEmitter.emit(this.listData);
  }

}
