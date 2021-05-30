import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelVerAgregarComponent } from './panel-ver-agregar.component';

describe('PanelVerAgregarComponent', () => {
  let component: PanelVerAgregarComponent;
  let fixture: ComponentFixture<PanelVerAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelVerAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelVerAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
