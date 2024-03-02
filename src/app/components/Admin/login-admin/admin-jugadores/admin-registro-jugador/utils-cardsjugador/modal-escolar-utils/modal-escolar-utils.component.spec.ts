import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEscolarUtilsComponent } from './modal-escolar-utils.component';

describe('ModalEscolarUtilsComponent', () => {
  let component: ModalEscolarUtilsComponent;
  let fixture: ComponentFixture<ModalEscolarUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEscolarUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEscolarUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
