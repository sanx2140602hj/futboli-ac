import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsUtilsComponent } from './cards-utils.component';

describe('CardsUtilsComponent', () => {
  let component: CardsUtilsComponent;
  let fixture: ComponentFixture<CardsUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
