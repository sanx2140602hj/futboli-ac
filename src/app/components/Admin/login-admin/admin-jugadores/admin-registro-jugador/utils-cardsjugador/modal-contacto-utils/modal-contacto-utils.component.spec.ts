import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContactoUtilsComponent } from './modal-contacto-utils.component';

describe('ModalContactoUtilsComponent', () => {
  let component: ModalContactoUtilsComponent;
  let fixture: ComponentFixture<ModalContactoUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContactoUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalContactoUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
