import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-results-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() title: string;
  @Input() columns: string[];
  @Input() data: any[];
  rowKeys: string[];

  constructor() {

  }

  ngOnInit() {
    this.rowKeys = Object.keys(this.data[0]);
  }

}
