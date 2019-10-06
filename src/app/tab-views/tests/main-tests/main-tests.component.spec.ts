import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTestsComponent } from './main-tests.component';

describe('MainTestsComponent', () => {
  let component: MainTestsComponent;
  let fixture: ComponentFixture<MainTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
