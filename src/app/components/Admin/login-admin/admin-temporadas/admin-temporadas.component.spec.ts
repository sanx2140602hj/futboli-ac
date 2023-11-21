import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemporadasComponent } from './admin-temporadas.component';

describe('AdminTemporadasComponent', () => {
  let component: AdminTemporadasComponent;
  let fixture: ComponentFixture<AdminTemporadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTemporadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTemporadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
