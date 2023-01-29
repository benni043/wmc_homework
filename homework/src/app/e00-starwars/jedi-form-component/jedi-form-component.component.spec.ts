import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JediFormComponentComponent } from './jedi-form-component.component';

describe('JediFormComponentComponent', () => {
  let component: JediFormComponentComponent;
  let fixture: ComponentFixture<JediFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JediFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JediFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
