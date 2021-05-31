import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProductSelectionComponent } from './panel-product-selection.component';

describe('PanelProductSelectionComponent', () => {
  let component: PanelProductSelectionComponent;
  let fixture: ComponentFixture<PanelProductSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelProductSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProductSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
