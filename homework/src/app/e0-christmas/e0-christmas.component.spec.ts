import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E0ChristmasComponent } from './e0-christmas.component';

describe('E0ChristmasComponent', () => {
  let component: E0ChristmasComponent;
  let fixture: ComponentFixture<E0ChristmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E0ChristmasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E0ChristmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
