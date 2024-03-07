import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPartidosAgregarsucesoComponent } from './modal-partidos-agregarsuceso.component';

describe('ModalPartidosAgregarsucesoComponent', () => {
  let component: ModalPartidosAgregarsucesoComponent;
  let fixture: ComponentFixture<ModalPartidosAgregarsucesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPartidosAgregarsucesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPartidosAgregarsucesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
