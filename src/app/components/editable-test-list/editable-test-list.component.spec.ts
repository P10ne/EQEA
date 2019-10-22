import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTestListComponent } from './editable-test-list.component';

describe('EditableTestListComponent', () => {
  let component: EditableTestListComponent;
  let fixture: ComponentFixture<EditableTestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableTestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
