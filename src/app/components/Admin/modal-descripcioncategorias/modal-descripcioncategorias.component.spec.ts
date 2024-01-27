import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDescripcioncategoriasComponent } from './modal-descripcioncategorias.component';

describe('ModalDescripcioncategoriasComponent', () => {
  let component: ModalDescripcioncategoriasComponent;
  let fixture: ComponentFixture<ModalDescripcioncategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDescripcioncategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDescripcioncategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
