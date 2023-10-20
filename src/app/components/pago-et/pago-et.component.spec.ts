import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEtComponent } from './pago-et.component';

describe('PagoEtComponent', () => {
  let component: PagoEtComponent;
  let fixture: ComponentFixture<PagoEtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagoEtComponent]
    });
    fixture = TestBed.createComponent(PagoEtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
