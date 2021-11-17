import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMetodoPagoComponent } from './formulario-metodo-pago.component';

describe('FormularioMetodoPagoComponent', () => {
  let component: FormularioMetodoPagoComponent;
  let fixture: ComponentFixture<FormularioMetodoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMetodoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
