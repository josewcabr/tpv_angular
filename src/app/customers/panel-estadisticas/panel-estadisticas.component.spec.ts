import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEstadisticasComponent } from './panel-estadisticas.component';

describe('PanelEstadisticasComponent', () => {
  let component: PanelEstadisticasComponent;
  let fixture: ComponentFixture<PanelEstadisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelEstadisticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
