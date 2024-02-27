import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosUtilsComponent } from './partidos-utils.component';

describe('PartidosUtilsComponent', () => {
  let component: PartidosUtilsComponent;
  let fixture: ComponentFixture<PartidosUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidosUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidosUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
