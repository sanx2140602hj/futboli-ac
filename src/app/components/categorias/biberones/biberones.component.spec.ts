import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiberonesComponent } from './biberones.component';

describe('BiberonesComponent', () => {
  let component: BiberonesComponent;
  let fixture: ComponentFixture<BiberonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiberonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiberonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
