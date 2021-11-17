import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroClienteComponent } from './formulario-registro-cliente.component';

describe('FormularioRegistroClienteComponent', () => {
  let component: FormularioRegistroClienteComponent;
  let fixture: ComponentFixture<FormularioRegistroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRegistroClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRegistroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
