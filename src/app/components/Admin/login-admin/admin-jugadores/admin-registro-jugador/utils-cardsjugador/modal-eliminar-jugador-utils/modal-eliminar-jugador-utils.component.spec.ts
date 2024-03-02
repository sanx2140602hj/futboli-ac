import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarJugadorUtilsComponent } from './modal-eliminar-jugador-utils.component';

describe('ModalEliminarJugadorUtilsComponent', () => {
  let component: ModalEliminarJugadorUtilsComponent;
  let fixture: ComponentFixture<ModalEliminarJugadorUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarJugadorUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarJugadorUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
