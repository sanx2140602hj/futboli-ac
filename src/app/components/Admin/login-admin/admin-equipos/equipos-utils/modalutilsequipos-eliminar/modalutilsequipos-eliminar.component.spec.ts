import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalutilsequiposEliminarComponent } from './modalutilsequipos-eliminar.component';

describe('ModalutilsequiposEliminarComponent', () => {
  let component: ModalutilsequiposEliminarComponent;
  let fixture: ComponentFixture<ModalutilsequiposEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalutilsequiposEliminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalutilsequiposEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
