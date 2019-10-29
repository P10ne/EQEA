import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainTestsComponent} from './tab-views/tests/main-tests/main-tests.component';
import {ExecTestsComponent} from './tab-views/tests/exec-tests/exec-tests.component';
import {ViewTestsComponent} from './tab-views/tests/view-tests/view-tests.component';
import {MainAdministrationComponent} from './tab-views/administration/main-administration/main-administration.component';
import {TestResultsComponent} from './tab-views/administration/test-results/test-results.component';
import {TestEditComponent} from './tab-views/administration/test-edit/test-edit.component';
import {BuildsDbEditComponent} from './tab-views/administration/builds-db-edit/builds-db-edit.component';
import {ReferenceDbEditComponent} from './tab-views/administration/reference-db-edit/reference-db-edit.component';
import {UsersPageComponent} from './tab-views/administration/users-page/users-page.component';
import {SingleCalcComponent} from './tab-views/assessment/single-calc/single-calc.component';
import {AutoCalcComponent} from './tab-views/assessment/auto-calc/auto-calc.component';
import {StatComponent} from './windows/stat/stat/stat.component';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './windows/main/main.component';
import {StatLayoutComponent} from './windows/stat/stat-layout.component';

const testsRoutes = [
  {path: '', component: MainTestsComponent, outlet: 'testOutlet'},
  {path: 'exectests', component: ExecTestsComponent, outlet: 'testOutlet'},
  {path: 'viewtests', component: ViewTestsComponent, outlet: 'testOutlet'}
];
const adminRoutes = [
  {path: '', component: MainAdministrationComponent, outlet: 'adminOutlet'},
  {path: 'testResults', component: TestResultsComponent, outlet: 'adminOutlet'},
  {path: 'testEdit', component: TestEditComponent, outlet: 'adminOutlet'},
  {path: 'buildsDbEdit', component: BuildsDbEditComponent, outlet: 'adminOutlet'},
  {path: 'referenceDbEdit', component: ReferenceDbEditComponent, outlet: 'adminOutlet'},
  {path: 'usersPage', component: UsersPageComponent, outlet: 'adminOutlet'}
];
const assessmentRoutes = [
  {path: '', component: SingleCalcComponent, outlet: 'assessmentOutlet'},
  {path: 'autoCalc', component: AutoCalcComponent, outlet: 'assessmentOutlet'}
];

const statRoutes = [
  {path: '', component: StatComponent, outlet: 'statOutlet'}
];

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: MainComponent,
    children: [
      ...testsRoutes,
      ...adminRoutes,
      ...assessmentRoutes
    ]
  },
  {
    path: 'stat', component: StatLayoutComponent,
    children: [
      ...statRoutes
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ]
})
export class AppRoutingModule { }


