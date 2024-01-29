import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalutilsequiposRegistrodelpresidenteComponent } from './modalutilsequipos-registrodelpresidente.component';

describe('ModalutilsequiposRegistrodelpresidenteComponent', () => {
  let component: ModalutilsequiposRegistrodelpresidenteComponent;
  let fixture: ComponentFixture<ModalutilsequiposRegistrodelpresidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalutilsequiposRegistrodelpresidenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalutilsequiposRegistrodelpresidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
