import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-side-nav-toggle',
  templateUrl: './side-nav-toggle.component.html',
  styleUrls: ['./side-nav-toggle.component.scss']
})
export class SideNavToggleComponent implements OnInit {
  @Input() isOpen = false;
  @Output() sideNavOpenEmitter = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.sideNavOpenEmitter.emit(this.isOpen);
  }


}
