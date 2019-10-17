import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatLayoutComponent } from './stat-layout.component';

describe('StatComponent', () => {
  let component: StatLayoutComponent;
  let fixture: ComponentFixture<StatLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
