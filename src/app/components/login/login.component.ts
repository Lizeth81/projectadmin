import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import {  NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private modal: NzModalService,
    private router: Router) {}

  submitForm(): void {
    if (this.validateForm.valid) {
        this.modal.success({
          nzContent: '¡Bienvenido al sistema de administración de proyecto de grado!'
          });
        this.router.navigate(['/Home']);
        console.log('submit', this.validateForm.value);
      }else {
        this.modal.error({
          nzTitle: '¡Datos invalidos!',
          nzContent: 'Usurio y/o contraseña son incorectos'
        });  
        Object.values(this.validateForm.controls).forEach(control => {
       if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }

        
      });
    }
  }

  
}
