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

const routes: Routes = [
  {path: '', component: MainAdministrationComponent, outlet: 'adminOutlet'},
  {path: 'testResults', component: TestResultsComponent, outlet: 'adminOutlet'},
  {path: 'testEdit', component: TestEditComponent, outlet: 'adminOutlet'},
  {path: 'buildsDbEdit', component: BuildsDbEditComponent, outlet: 'adminOutlet'},
  {path: 'referenceDbEdit', component: ReferenceDbEditComponent, outlet: 'adminOutlet'},
  {path: 'usersPage', component: UsersPageComponent, outlet: 'adminOutlet'},
  {path: '', component: MainTestsComponent, outlet: 'testOutlet'},
  {path: '', component: SingleCalcComponent, outlet: 'assessmentOutlet'},
  {path: 'autoCalc', component: AutoCalcComponent, outlet: 'assessmentOutlet'},
  {path: 'exectests', component: ExecTestsComponent, outlet: 'testOutlet'},
  {path: 'viewtests', component: ViewTestsComponent, outlet: 'testOutlet'},
];

@NgModule({
  declarations: [AppComponent, TheoryComponent, TestsComponent, AssessmentComponent, AdministrationComponent, TestItemComponent, ExecTestsComponent, ViewTestsComponent, MainTestsComponent, BackBtnComponent, MainAdministrationComponent, SingleCalcComponent, AutoCalcComponent, TestResultsComponent, TestEditComponent, BuildsDbEditComponent, ReferenceDbEditComponent, UsersPageComponent, SideNavComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}