import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVistaCitaComponent } from './admin-vista-cita.component';

describe('AdminVistaCitaComponent', () => {
  let component: AdminVistaCitaComponent;
  let fixture: ComponentFixture<AdminVistaCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVistaCitaComponent]
    });
    fixture = TestBed.createComponent(AdminVistaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
