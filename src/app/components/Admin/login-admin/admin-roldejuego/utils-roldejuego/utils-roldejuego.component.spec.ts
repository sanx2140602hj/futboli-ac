import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilsRoldejuegoComponent } from './utils-roldejuego.component';

describe('UtilsRoldejuegoComponent', () => {
  let component: UtilsRoldejuegoComponent;
  let fixture: ComponentFixture<UtilsRoldejuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilsRoldejuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilsRoldejuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
