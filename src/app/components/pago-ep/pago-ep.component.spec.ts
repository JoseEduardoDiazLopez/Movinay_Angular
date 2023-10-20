import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEpComponent } from './pago-ep.component';

describe('PagoEpComponent', () => {
  let component: PagoEpComponent;
  let fixture: ComponentFixture<PagoEpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagoEpComponent]
    });
    fixture = TestBed.createComponent(PagoEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
