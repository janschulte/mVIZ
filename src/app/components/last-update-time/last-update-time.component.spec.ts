import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUpdateTimeComponent } from './last-update-time.component';

describe('LastUpdateTimeComponent', () => {
  let component: LastUpdateTimeComponent;
  let fixture: ComponentFixture<LastUpdateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastUpdateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastUpdateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
