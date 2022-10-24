import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2HelloNameComponent } from './e2-hello-name.component';

describe('E2HelloNameComponent', () => {
  let component: E2HelloNameComponent;
  let fixture: ComponentFixture<E2HelloNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E2HelloNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E2HelloNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
