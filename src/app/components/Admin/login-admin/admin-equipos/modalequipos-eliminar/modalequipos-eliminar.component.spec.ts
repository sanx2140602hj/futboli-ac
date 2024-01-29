import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalequiposEliminarComponent } from './modalequipos-eliminar.component';

describe('ModalequiposEliminarComponent', () => {
  let component: ModalequiposEliminarComponent;
  let fixture: ComponentFixture<ModalequiposEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalequiposEliminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalequiposEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
