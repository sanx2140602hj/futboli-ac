import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoldejuegoComponent } from './admin-roldejuego.component';

describe('AdminRoldejuegoComponent', () => {
  let component: AdminRoldejuegoComponent;
  let fixture: ComponentFixture<AdminRoldejuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoldejuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRoldejuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
