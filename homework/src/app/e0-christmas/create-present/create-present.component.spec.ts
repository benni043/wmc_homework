import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePresentComponent } from './create-present.component';

describe('CreatePresentComponent', () => {
  let component: CreatePresentComponent;
  let fixture: ComponentFixture<CreatePresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePresentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
