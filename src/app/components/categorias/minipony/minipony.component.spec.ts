import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniponyComponent } from './minipony.component';

describe('MiniponyComponent', () => {
  let component: MiniponyComponent;
  let fixture: ComponentFixture<MiniponyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniponyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniponyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
