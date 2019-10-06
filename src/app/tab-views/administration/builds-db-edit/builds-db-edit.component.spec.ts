import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsDbEditComponent } from './builds-db-edit.component';

describe('BuildsDbEditComponent', () => {
  let component: BuildsDbEditComponent;
  let fixture: ComponentFixture<BuildsDbEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildsDbEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildsDbEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
