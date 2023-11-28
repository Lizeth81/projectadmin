import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  validateForm: FormGroup<{
    correo: FormControl<string>;
    pass: FormControl<string>;
  }> = this.fb.group({
    correo: ['', [Validators.required]],
    pass: ['', [Validators.required]]
  });
  
  enviarDatos(){
      const dataUser = {correo: this.validateForm.value.correo, pass: this.validateForm.value.pass};
      this.userService.Login(dataUser).subscribe(data => {
        if(data.success){
          console.log("data:",data);
          this.modal.success({
            nzContent: '¡Bienvenido al sistema de administración de proyecto de grado!'
            });
          this.router.navigate(['/Home']);
        }else{
          this.modal.error({
            nzTitle: '¡Datos invalidos!',
            nzContent: 'Usurio y/o contraseña son incorectos'
          });  
        }
        });
        }

  constructor(
    public userService: UsersService,
    private fb: NonNullableFormBuilder,
    private modal: NzModalService,
    private router: Router) {}

  
    ngOnInit(): void {
      
    }   

  /*submitForm() {        
    if (this.validateForm.valid) {
      const dataUser = {correo: this.validateForm.get('correo') , pass: this.validateForm.get('pass')};
      this.userService.Login(dataUser).subscribe(data => {
        console.log(data);
        this.modal.success({
          nzContent: '¡Bienvenido al sistema de administración de proyecto de grado!'
          });
        this.router.navigate(['/Home']);
        console.log('submit', this.validateForm.value);
      });
        
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
  }*/ 
   
}
