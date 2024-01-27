import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarCategoriasComponent } from './modal-eliminar-categorias.component';

describe('ModalEliminarCategoriasComponent', () => {
  let component: ModalEliminarCategoriasComponent;
  let fixture: ComponentFixture<ModalEliminarCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
