import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub12Component } from './sub12.component';

describe('Sub12Component', () => {
  let component: Sub12Component;
  let fixture: ComponentFixture<Sub12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sub12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
