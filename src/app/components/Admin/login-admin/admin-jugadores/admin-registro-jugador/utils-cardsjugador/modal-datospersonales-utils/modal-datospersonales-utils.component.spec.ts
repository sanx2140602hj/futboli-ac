import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDatospersonalesUtilsComponent } from './modal-datospersonales-utils.component';

describe('ModalDatospersonalesUtilsComponent', () => {
  let component: ModalDatospersonalesUtilsComponent;
  let fixture: ComponentFixture<ModalDatospersonalesUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDatospersonalesUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDatospersonalesUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
