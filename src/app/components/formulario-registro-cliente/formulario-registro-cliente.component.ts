import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-formulario-registro-cliente',
  templateUrl: './formulario-registro-cliente.component.html',
  styleUrls: ['./formulario-registro-cliente.component.css']
})
export class FormularioRegistroClienteComponent {
  
  closeResult = '';
  reactiveForm: FormGroup;
  hide=true;
  hideC=true;


    constructor(private formBuilder: FormBuilder) {
      this.reactiveForm = this.formBuilder.group({
        firstName: new FormControl('', Validators.required),
        firstLastName: new FormControl('', Validators.required),
        secondName: new FormControl(''),
        secondLastName: new FormControl('', Validators.required),
        hn_id: new FormControl('', Validators.required),
        department: new FormControl(''),
        email: new FormControl('',[Validators.required, Validators.email]),
        terminos: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        politicas: new FormControl('',Validators.required),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      }, {
        validators: this.MustMatch('password', 'confirmPassword')
      });
    }

/* Validaciones Handle de errores.
Email validar que ese correo no este en uso
*/



  submitted: boolean = false;
  get f() {
    return this.reactiveForm.controls;
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      } if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  ngOnInit(): void {
  }

  ch(e: any) {
    if (e.checked) {
      this.reactiveForm.controls['password'].setValidators([Validators.required])
      this.reactiveForm.controls['password'].updateValueAndValidity()
    } else {
      this.reactiveForm.controls['password'].setValidators(null)
      this.reactiveForm.controls['password'].updateValueAndValidity()
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
  }


  sweetAlertSuccess() {
    Swal.fire('¡Muy Bien!', 'Te hemos enviado un correo para que valides tu cuenta.', 'success');
  }

  sweetAlertError() {
    Swal.fire('¡Upps!', 'Algo no ha salido como lo esperabamos.', 'error');
  }






}
