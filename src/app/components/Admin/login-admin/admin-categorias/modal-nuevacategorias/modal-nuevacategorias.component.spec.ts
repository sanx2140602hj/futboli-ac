import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevacategoriasComponent } from './modal-nuevacategorias.component';

describe('ModalNuevacategoriasComponent', () => {
  let component: ModalNuevacategoriasComponent;
  let fixture: ComponentFixture<ModalNuevacategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevacategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNuevacategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
