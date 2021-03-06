import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { TheoryComponent } from './tab-views/theory/theory.component';
import { TestsComponent } from './tab-views/tests/tests.component';
import { AssessmentComponent } from './tab-views/assessment/assessment.component';
import { AdministrationComponent } from './tab-views/administration/administration.component';
import { TestItemComponent } from './tab-views/tests/test-item/test-item.component';
import { ExecTestsComponent } from './tab-views/tests/exec-tests/exec-tests.component';
import { ViewTestsComponent } from './tab-views/tests/view-tests/view-tests.component';
import {RouterModule, Routes} from '@angular/router';
import { MainTestsComponent } from './tab-views/tests/main-tests/main-tests.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { MainAdministrationComponent } from './tab-views/administration/main-administration/main-administration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleCalcComponent } from './tab-views/assessment/single-calc/single-calc.component';
import { AutoCalcComponent } from './tab-views/assessment/auto-calc/auto-calc.component';
import { TestResultsComponent } from './tab-views/administration/test-results/test-results.component';
import { TestEditComponent } from './tab-views/administration/test-edit/test-edit.component';
import { BuildsDbEditComponent } from './tab-views/administration/builds-db-edit/builds-db-edit.component';
import { ReferenceDbEditComponent } from './tab-views/administration/reference-db-edit/reference-db-edit.component';
import { UsersPageComponent } from './tab-views/administration/users-page/users-page.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideNavToggleComponent } from './components/side-nav-toggle/side-nav-toggle.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TableComponent } from './components/table/table.component';
import { EditableTestListItemComponent } from './components/editable-test-list-item/editable-test-list-item.component';
import { MainComponent } from './windows/main/main.component';
import { StatLayoutComponent } from './windows/stat/stat-layout.component';
import { StatComponent } from './windows/stat/stat/stat.component';
import { ListComponent } from './components/list/list.component';
import { EditableTestListComponent } from './components/editable-test-list/editable-test-list.component';
import { OLPopupComponent } from './components/olpopup/olpopup.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import {AppRoutingModule} from './app.routing.module';


@NgModule({
  declarations: [AppComponent,
    TheoryComponent,
    TestsComponent,
    AssessmentComponent,
    AdministrationComponent,
    TestItemComponent,
    ExecTestsComponent,
    ViewTestsComponent,
    MainTestsComponent,
    BackBtnComponent,
    MainAdministrationComponent,
    SingleCalcComponent,
    AutoCalcComponent,
    TestResultsComponent,
    TestEditComponent,
    BuildsDbEditComponent,
    ReferenceDbEditComponent,
    UsersPageComponent,
    SideNavComponent,
    ToolbarComponent,
    SideNavToggleComponent,
    AccordionComponent,
    ListItemComponent,
    TableComponent,
    EditableTestListItemComponent,
    MainComponent,
    StatLayoutComponent,
    StatComponent,
    ListComponent,
    EditableTestListComponent,
    OLPopupComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OLPopupComponent]
})
export class AppModule {}
