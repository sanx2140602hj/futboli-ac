import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJugadoresComponent } from './admin-jugadores.component';

describe('AdminJugadoresComponent', () => {
  let component: AdminJugadoresComponent;
  let fixture: ComponentFixture<AdminJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJugadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
