import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionFacetComponent } from './distribution-facet.component';

describe('DistributionFacetComponent', () => {
  let component: DistributionFacetComponent;
  let fixture: ComponentFixture<DistributionFacetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionFacetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionFacetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
