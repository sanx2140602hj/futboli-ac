import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIdentificacionUtilsComponent } from './modal-identificacion-utils.component';

describe('ModalIdentificacionUtilsComponent', () => {
  let component: ModalIdentificacionUtilsComponent;
  let fixture: ComponentFixture<ModalIdentificacionUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIdentificacionUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIdentificacionUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
