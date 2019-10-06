import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builds-db-edit',
  templateUrl: './builds-db-edit.component.html',
  styleUrls: ['./builds-db-edit.component.scss']
})
export class BuildsDbEditComponent implements OnInit {

  showMenu = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
