import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarCitaComponent } from './validar-cita.component';

describe('ValidarCitaComponent', () => {
  let component: ValidarCitaComponent;
  let fixture: ComponentFixture<ValidarCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidarCitaComponent]
    });
    fixture = TestBed.createComponent(ValidarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
