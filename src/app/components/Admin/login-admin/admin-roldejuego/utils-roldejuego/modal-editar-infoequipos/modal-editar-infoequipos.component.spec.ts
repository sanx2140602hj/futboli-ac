import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarInfoequiposComponent } from './modal-editar-infoequipos.component';

describe('ModalEditarInfoequiposComponent', () => {
  let component: ModalEditarInfoequiposComponent;
  let fixture: ComponentFixture<ModalEditarInfoequiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarInfoequiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarInfoequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
