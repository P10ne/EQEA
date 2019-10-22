import {Component, Input, OnInit} from '@angular/core';

export interface ITableCols {
  title: string;
  key: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() title: string;
  @Input() columns: ITableCols[];
  @Input() data: any[];
  rowKeys: string[];

  constructor() {

  }

  ngOnInit() {
  }

}
