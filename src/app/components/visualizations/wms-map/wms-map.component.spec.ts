import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsMapComponent } from './wms-map.component';

describe('WmsMapComponent', () => {
  let component: WmsMapComponent;
  let fixture: ComponentFixture<WmsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
