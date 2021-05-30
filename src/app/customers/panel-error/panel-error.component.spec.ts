import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelErrorComponent } from './panel-error.component';

describe('PanelErrorComponent', () => {
  let component: PanelErrorComponent;
  let fixture: ComponentFixture<PanelErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
