import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescolarComponent } from './prescolar.component';

describe('PrescolarComponent', () => {
  let component: PrescolarComponent;
  let fixture: ComponentFixture<PrescolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
