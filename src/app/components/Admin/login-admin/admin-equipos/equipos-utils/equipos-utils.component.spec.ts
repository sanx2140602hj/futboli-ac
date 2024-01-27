import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposUtilsComponent } from './equipos-utils.component';

describe('EquiposUtilsComponent', () => {
  let component: EquiposUtilsComponent;
  let fixture: ComponentFixture<EquiposUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
