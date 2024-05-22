import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTablaPosicionActualizarComponent } from './modal-tabla-posicion-actualizar.component';

describe('ModalTablaPosicionActualizarComponent', () => {
  let component: ModalTablaPosicionActualizarComponent;
  let fixture: ComponentFixture<ModalTablaPosicionActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTablaPosicionActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTablaPosicionActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
