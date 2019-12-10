import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityMapComponent } from './unity-map.component';

describe('UnityMapComponent', () => {
  let component: UnityMapComponent;
  let fixture: ComponentFixture<UnityMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
