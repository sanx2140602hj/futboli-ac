import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilsCardsjugadorComponent } from './utils-cardsjugador.component';

describe('UtilsCardsjugadorComponent', () => {
  let component: UtilsCardsjugadorComponent;
  let fixture: ComponentFixture<UtilsCardsjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilsCardsjugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilsCardsjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
