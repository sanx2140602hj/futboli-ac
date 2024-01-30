import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTablaposicionComponent } from './admin-tablaposicion.component';

describe('AdminTablaposicionComponent', () => {
  let component: AdminTablaposicionComponent;
  let fixture: ComponentFixture<AdminTablaposicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTablaposicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTablaposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
