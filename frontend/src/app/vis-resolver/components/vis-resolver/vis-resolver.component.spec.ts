import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisResolverComponent } from './vis-resolver.component';

describe('VisResolverComponent', () => {
  let component: VisResolverComponent;
  let fixture: ComponentFixture<VisResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
