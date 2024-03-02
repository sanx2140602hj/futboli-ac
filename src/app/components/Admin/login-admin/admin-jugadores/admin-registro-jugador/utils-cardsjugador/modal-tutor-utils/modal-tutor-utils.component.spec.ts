import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTutorUtilsComponent } from './modal-tutor-utils.component';

describe('ModalTutorUtilsComponent', () => {
  let component: ModalTutorUtilsComponent;
  let fixture: ComponentFixture<ModalTutorUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTutorUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTutorUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
