import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E3FibonacciComponent } from './e3-fibonacci.component';

describe('E3FibonacciComponent', () => {
  let component: E3FibonacciComponent;
  let fixture: ComponentFixture<E3FibonacciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E3FibonacciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E3FibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
