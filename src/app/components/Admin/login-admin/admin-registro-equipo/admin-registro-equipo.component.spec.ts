import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistroEquipoComponent } from './admin-registro-equipo.component';
import Swal from 'sweetalert2'

describe('AdminRegistroEquipoComponent', () => {
  let component: AdminRegistroEquipoComponent;
  let fixture: ComponentFixture<AdminRegistroEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegistroEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRegistroEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
