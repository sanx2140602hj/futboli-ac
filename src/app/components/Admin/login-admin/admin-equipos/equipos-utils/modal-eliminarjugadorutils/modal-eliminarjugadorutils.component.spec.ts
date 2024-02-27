import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarjugadorutilsComponent } from './modal-eliminarjugadorutils.component';

describe('ModalEliminarjugadorutilsComponent', () => {
  let component: ModalEliminarjugadorutilsComponent;
  let fixture: ComponentFixture<ModalEliminarjugadorutilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarjugadorutilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarjugadorutilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
