import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() title: string;
  @Input() isEditable: boolean;
  @Input() isDeletable: boolean;
  constructor() { }

  ngOnInit() {
  }

}
