import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSeleccionProdEmergenteComponent } from './panel-seleccion-prod-emergente.component';

describe('PanelSeleccionProdEmergenteComponent', () => {
  let component: PanelSeleccionProdEmergenteComponent;
  let fixture: ComponentFixture<PanelSeleccionProdEmergenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSeleccionProdEmergenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSeleccionProdEmergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
