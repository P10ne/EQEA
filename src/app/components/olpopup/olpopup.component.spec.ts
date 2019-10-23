import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OLPopupComponent } from './olpopup.component';

describe('OLPopupComponent', () => {
  let component: OLPopupComponent;
  let fixture: ComponentFixture<OLPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OLPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OLPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
