import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E8ServerComponent } from './e8-server.component';

describe('E8ServerComponent', () => {
  let component: E8ServerComponent;
  let fixture: ComponentFixture<E8ServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E8ServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E8ServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
