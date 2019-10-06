import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecTestsComponent } from './exec-tests.component';

describe('ExecTestsComponent', () => {
  let component: ExecTestsComponent;
  let fixture: ComponentFixture<ExecTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
