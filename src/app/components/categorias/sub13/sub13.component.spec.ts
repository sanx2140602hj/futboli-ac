import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub13Component } from './sub13.component';

describe('Sub13Component', () => {
  let component: Sub13Component;
  let fixture: ComponentFixture<Sub13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sub13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
