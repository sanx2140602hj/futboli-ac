import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPartidosAgregardatosComponent } from './modal-partidos-agregardatos.component';

describe('ModalPartidosAgregardatosComponent', () => {
  let component: ModalPartidosAgregardatosComponent;
  let fixture: ComponentFixture<ModalPartidosAgregardatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPartidosAgregardatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPartidosAgregardatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
