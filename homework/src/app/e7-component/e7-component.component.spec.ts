import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E7ComponentComponent } from './e7-component.component';

describe('E7ComponentComponent', () => {
  let component: E7ComponentComponent;
  let fixture: ComponentFixture<E7ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E7ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E7ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
