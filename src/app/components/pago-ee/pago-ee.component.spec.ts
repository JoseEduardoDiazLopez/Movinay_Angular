import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEeComponent } from './pago-ee.component';

describe('PagoEeComponent', () => {
  let component: PagoEeComponent;
  let fixture: ComponentFixture<PagoEeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagoEeComponent]
    });
    fixture = TestBed.createComponent(PagoEeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
