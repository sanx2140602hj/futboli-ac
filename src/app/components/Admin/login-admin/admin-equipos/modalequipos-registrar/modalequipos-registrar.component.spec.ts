import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalequiposRegistrarComponent } from './modalequipos-registrar.component';

describe('ModalequiposRegistrarComponent', () => {
  let component: ModalequiposRegistrarComponent;
  let fixture: ComponentFixture<ModalequiposRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalequiposRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalequiposRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
