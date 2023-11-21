import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistroJugadorComponent } from './admin-registro-jugador.component';

describe('AdminRegistroJugadorComponent', () => {
  let component: AdminRegistroJugadorComponent;
  let fixture: ComponentFixture<AdminRegistroJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegistroJugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRegistroJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
