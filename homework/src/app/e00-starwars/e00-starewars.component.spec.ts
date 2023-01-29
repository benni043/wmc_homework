import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E00StarewarsComponent } from './e00-starewars.component';

describe('E00StarewarsComponent', () => {
  let component: E00StarewarsComponent;
  let fixture: ComponentFixture<E00StarewarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E00StarewarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E00StarewarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
