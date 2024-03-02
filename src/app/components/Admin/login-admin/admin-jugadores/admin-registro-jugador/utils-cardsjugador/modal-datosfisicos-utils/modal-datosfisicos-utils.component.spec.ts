import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDatosfisicosUtilsComponent } from './modal-datosfisicos-utils.component';

describe('ModalDatosfisicosUtilsComponent', () => {
  let component: ModalDatosfisicosUtilsComponent;
  let fixture: ComponentFixture<ModalDatosfisicosUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDatosfisicosUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDatosfisicosUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
