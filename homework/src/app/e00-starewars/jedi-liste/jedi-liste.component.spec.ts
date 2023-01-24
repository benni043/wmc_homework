import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JediListeComponent } from './jedi-liste.component';

describe('JediListeComponent', () => {
  let component: JediListeComponent;
  let fixture: ComponentFixture<JediListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JediListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JediListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
