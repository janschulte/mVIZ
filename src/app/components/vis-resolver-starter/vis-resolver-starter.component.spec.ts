import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisResolverStarterComponent } from './vis-resolver-starter.component';

describe('VisResolverStarterComponent', () => {
  let component: VisResolverStarterComponent;
  let fixture: ComponentFixture<VisResolverStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisResolverStarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisResolverStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
