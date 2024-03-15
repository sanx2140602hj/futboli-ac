import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarTorneoComponent } from './modal-eliminar-torneo.component';

describe('ModalEliminarTorneoComponent', () => {
  let component: ModalEliminarTorneoComponent;
  let fixture: ComponentFixture<ModalEliminarTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarTorneoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
