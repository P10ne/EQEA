import {Component, OnInit} from '@angular/core';
import {ProgressBarService} from './services/progress-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tabs = {
    theoryTab: {active: true},
    testsTab: {active: false},
    assessmentTab: {active: false},
    administrationTab: {active: false}
  };

  get theoryTabIsActive() {
    return this.tabs.theoryTab.active;
  }
  get testsTabIsActive() {
    return this.tabs.testsTab.active;
  }
  get assessmentTabIsActive() {
    return this.tabs.assessmentTab.active;
  }
  get administrationTabIsActive() {
    return this.tabs.administrationTab.active;
  }

  constructor(private progress: ProgressBarService) {}

  ngOnInit(): void {

  }



  setActiveTheoryTab() {
    this.setTabsUnactive();
    this.tabs.theoryTab.active = true;
  }
  setActiveTestsTab() {
    this.setTabsUnactive();
    this.tabs.testsTab.active = true;
  }
  setActiveAssessmentTab() {
    this.setTabsUnactive();
    this.tabs.assessmentTab.active = true;
  }
  setActiveAdministrationTab() {
    this.setTabsUnactive();
    this.tabs.administrationTab.active = true;
  }

  setTabsUnactive() {
    for (const tabsKey in this.tabs) {
      if (this.tabs[tabsKey].active) {
        this.tabs[tabsKey].active = false;
      }
    }
  }
}


