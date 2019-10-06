import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCalcComponent } from './single-calc.component';

describe('SingleCalcComponent', () => {
  let component: SingleCalcComponent;
  let fixture: ComponentFixture<SingleCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
