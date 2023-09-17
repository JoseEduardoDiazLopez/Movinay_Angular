import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasCComponent } from './citas-c.component';

describe('CitasCComponent', () => {
  let component: CitasCComponent;
  let fixture: ComponentFixture<CitasCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasCComponent]
    });
    fixture = TestBed.createComponent(CitasCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
