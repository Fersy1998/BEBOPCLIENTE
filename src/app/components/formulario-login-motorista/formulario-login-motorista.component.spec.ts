import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLoginMotoristaComponent } from './formulario-login-motorista.component';

describe('FormularioLoginMotoristaComponent', () => {
  let component: FormularioLoginMotoristaComponent;
  let fixture: ComponentFixture<FormularioLoginMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioLoginMotoristaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLoginMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
