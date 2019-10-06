import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCalcComponent } from './auto-calc.component';

describe('AutoCalcComponent', () => {
  let component: AutoCalcComponent;
  let fixture: ComponentFixture<AutoCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
