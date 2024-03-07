import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPartidosEvaluarequipamientoComponent } from './modal-partidos-evaluarequipamiento.component';

describe('ModalPartidosEvaluarequipamientoComponent', () => {
  let component: ModalPartidosEvaluarequipamientoComponent;
  let fixture: ComponentFixture<ModalPartidosEvaluarequipamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPartidosEvaluarequipamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPartidosEvaluarequipamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
