import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceDbEditComponent } from './reference-db-edit.component';

describe('ReferenceDbEditComponent', () => {
  let component: ReferenceDbEditComponent;
  let fixture: ComponentFixture<ReferenceDbEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceDbEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceDbEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
