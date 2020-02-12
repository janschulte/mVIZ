import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationSupporterComponent } from './visualization-supporter.component';

describe('DetailsComponent', () => {
  let component: VisualizationSupporterComponent;
  let fixture: ComponentFixture<VisualizationSupporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizationSupporterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationSupporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
