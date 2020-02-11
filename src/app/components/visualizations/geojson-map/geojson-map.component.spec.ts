import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeojsonMapComponent } from './geojson-map.component';

describe('GeojsonMapComponent', () => {
  let component: GeojsonMapComponent;
  let fixture: ComponentFixture<GeojsonMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeojsonMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeojsonMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
