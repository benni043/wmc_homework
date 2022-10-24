import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E4F1Component } from './e4-f1.component';

describe('E4F1Component', () => {
  let component: E4F1Component;
  let fixture: ComponentFixture<E4F1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E4F1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E4F1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
