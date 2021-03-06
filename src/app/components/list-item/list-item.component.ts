import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

export interface IListItem {
  id?: string;
  title: string;
  isSelected?: boolean;
  isEditable?: boolean;
  isSelectable?: boolean;
  isDeletable?: boolean;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  editing = false;
  @Input() isSelected: boolean;
  @Input() id: string;
  @Input() title: string;
  @Input() isSelectable: boolean;
  @Input() isEditable: boolean;
  @Input() isDeletable: boolean;

  @Output() selectEmitter = new EventEmitter<string>();
  @Output() editEmitter = new EventEmitter<{id: string, newTitle: string}>();
  @Output() deleteEmitter = new EventEmitter<string>();

  @ViewChild('editInput', {static: false})
  editInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    if (this.isSelectable) {
      this.selectEmitter.emit(this.id);
    }
  }

  onDeleted(event) {
    event.stopPropagation();
    this.deleteEmitter.emit(this.id);
  }

  onEditing() {
    this.editing = true;
    setTimeout(() => { // без timeout => editInput == undefined
      this.editInput.nativeElement.select();
    }, 0);
  }

  onEdited() {
    this.editing = false;
    this.editEmitter.emit({ id: this.id, newTitle: this.title });
  }

}
