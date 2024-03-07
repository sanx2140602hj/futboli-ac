import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPartidosEvaluarporraComponent } from './modal-partidos-evaluarporra.component';

describe('ModalPartidosEvaluarporraComponent', () => {
  let component: ModalPartidosEvaluarporraComponent;
  let fixture: ComponentFixture<ModalPartidosEvaluarporraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPartidosEvaluarporraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPartidosEvaluarporraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
