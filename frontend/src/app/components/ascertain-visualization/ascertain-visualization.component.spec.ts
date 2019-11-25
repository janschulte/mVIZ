import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscertainVisualizationComponent } from './ascertain-visualization.component';

describe('AscertainVisualizationComponent', () => {
  let component: AscertainVisualizationComponent;
  let fixture: ComponentFixture<AscertainVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscertainVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscertainVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
