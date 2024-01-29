import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalequiposEditarComponent } from './modalequipos-editar.component';

describe('ModalequiposEditarComponent', () => {
  let component: ModalequiposEditarComponent;
  let fixture: ComponentFixture<ModalequiposEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalequiposEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalequiposEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
