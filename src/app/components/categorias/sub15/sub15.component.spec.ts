import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub15Component } from './sub15.component';

describe('Sub15Component', () => {
  let component: Sub15Component;
  let fixture: ComponentFixture<Sub15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sub15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
