import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolarComponent } from './escolar.component';

describe('EscolarComponent', () => {
  let component: EscolarComponent;
  let fixture: ComponentFixture<EscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
