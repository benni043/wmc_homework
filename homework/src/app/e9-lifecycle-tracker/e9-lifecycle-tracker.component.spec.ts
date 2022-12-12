import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E9LifecycleTrackerComponent } from './e9-lifecycle-tracker.component';

describe('E9LifecycleTrackerComponent', () => {
  let component: E9LifecycleTrackerComponent;
  let fixture: ComponentFixture<E9LifecycleTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E9LifecycleTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E9LifecycleTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
