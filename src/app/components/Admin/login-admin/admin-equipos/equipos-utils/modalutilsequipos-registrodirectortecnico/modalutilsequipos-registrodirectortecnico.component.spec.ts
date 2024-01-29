import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalutilsequiposRegistrodirectortecnicoComponent } from './modalutilsequipos-registrodirectortecnico.component';

describe('ModalutilsequiposRegistrodirectortecnicoComponent', () => {
  let component: ModalutilsequiposRegistrodirectortecnicoComponent;
  let fixture: ComponentFixture<ModalutilsequiposRegistrodirectortecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalutilsequiposRegistrodirectortecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalutilsequiposRegistrodirectortecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
