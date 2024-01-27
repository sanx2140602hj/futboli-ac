import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarCategoriasComponent } from './modal-editar-categorias.component';

describe('ModalEditarCategoriasComponent', () => {
  let component: ModalEditarCategoriasComponent;
  let fixture: ComponentFixture<ModalEditarCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
