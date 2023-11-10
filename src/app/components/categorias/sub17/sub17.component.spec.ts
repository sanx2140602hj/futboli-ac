import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub17Component } from './sub17.component';

describe('Sub17Component', () => {
  let component: Sub17Component;
  let fixture: ComponentFixture<Sub17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sub17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
