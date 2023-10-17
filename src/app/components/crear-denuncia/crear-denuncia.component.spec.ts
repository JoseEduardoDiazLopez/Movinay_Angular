import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDenunciaComponent } from './crear-denuncia.component';

describe('CrearDenunciaComponent', () => {
  let component: CrearDenunciaComponent;
  let fixture: ComponentFixture<CrearDenunciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearDenunciaComponent]
    });
    fixture = TestBed.createComponent(CrearDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
