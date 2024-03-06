import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarEquiposClasificadosComponent } from './modal-agregar-equipos-clasificados.component';

describe('ModalAgregarEquiposClasificadosComponent', () => {
  let component: ModalAgregarEquiposClasificadosComponent;
  let fixture: ComponentFixture<ModalAgregarEquiposClasificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarEquiposClasificadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarEquiposClasificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
