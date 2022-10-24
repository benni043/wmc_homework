import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E6StoppWatchComponent } from './e6-stopp-watch.component';

describe('E6StoppWatchComponent', () => {
  let component: E6StoppWatchComponent;
  let fixture: ComponentFixture<E6StoppWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E6StoppWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E6StoppWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
