import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalutilsequiposEditarComponent } from './modalutilsequipos-editar.component';

describe('ModalutilsequiposEditarComponent', () => {
  let component: ModalutilsequiposEditarComponent;
  let fixture: ComponentFixture<ModalutilsequiposEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalutilsequiposEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalutilsequiposEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
