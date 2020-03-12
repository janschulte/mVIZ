import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVisResolverComponent } from './details-vis-resolver.component';

describe('DetailsVisResolverComponent', () => {
  let component: DetailsVisResolverComponent;
  let fixture: ComponentFixture<DetailsVisResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsVisResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVisResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
