import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSelecClienteComponent } from './panel-selec-cliente.component';

describe('PanelSelecClienteComponent', () => {
  let component: PanelSelecClienteComponent;
  let fixture: ComponentFixture<PanelSelecClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSelecClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSelecClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
