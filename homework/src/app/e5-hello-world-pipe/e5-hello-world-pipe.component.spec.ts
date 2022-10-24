import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E5HelloWorldPipeComponent } from './e5-hello-world-pipe.component';

describe('E5HelloWorldPipeComponent', () => {
  let component: E5HelloWorldPipeComponent;
  let fixture: ComponentFixture<E5HelloWorldPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E5HelloWorldPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E5HelloWorldPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
