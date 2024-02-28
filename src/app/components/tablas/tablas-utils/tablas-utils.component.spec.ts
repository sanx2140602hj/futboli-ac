import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasUtilsComponent } from './tablas-utils.component';

describe('TablasUtilsComponent', () => {
  let component: TablasUtilsComponent;
  let fixture: ComponentFixture<TablasUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablasUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablasUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
