import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSellStatisticsComponent } from './panel-sell-statistics.component';

describe('PanelSellStatisticsComponent', () => {
  let component: PanelSellStatisticsComponent;
  let fixture: ComponentFixture<PanelSellStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSellStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSellStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
