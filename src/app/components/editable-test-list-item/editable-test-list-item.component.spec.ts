import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTestListItemComponent } from './editable-test-list-item.component';

describe('EditableTestListItemComponent', () => {
  let component: EditableTestListItemComponent;
  let fixture: ComponentFixture<EditableTestListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableTestListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTestListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
