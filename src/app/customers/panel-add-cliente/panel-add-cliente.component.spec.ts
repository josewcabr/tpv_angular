import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAddClienteComponent } from './panel-add-cliente.component';

describe('PanelAddClienteComponent', () => {
  let component: PanelAddClienteComponent;
  let fixture: ComponentFixture<PanelAddClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAddClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAddClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
