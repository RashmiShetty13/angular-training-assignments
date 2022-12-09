import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddanduploadpostComponent } from './addanduploadpost.component';

describe('AddanduploadpostComponent', () => {
  let component: AddanduploadpostComponent;
  let fixture: ComponentFixture<AddanduploadpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddanduploadpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddanduploadpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
