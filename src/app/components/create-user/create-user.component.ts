import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators
} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UsersService } from 'src/app/services/users.service'; 

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  validateForm: FormGroup<{
    userName: FormControl<string>;
    codigo: FormControl<number>;
    telefono: FormControl<number>;
    email: FormControl<string>;
    password: FormControl<string>;
    opcionSeleccionado: FormControl<string>;
  }> = this.fb.group({
      userName: ['', [Validators.required]],
      codigo: [ 0, [Validators.required]],
      telefono: [0, [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      opcionSeleccionado: ['0'],
  });

  isVisible = false;
  isOkLoading = false;
  roles: any[] = [];
  verSeleccion:String = '';


  constructor(
    public userService: UsersService,
    private  modal:NzModalService, 
    private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.userService.getDatosRoles().subscribe(data => {
      console.log(data);
      let rol =[];
      for(let i of data){
        rol.push(i.nombre);
      } 
      this.roles = rol;
      console.log("Roles:", this.roles);
    })
  }
  
  selectedValue = null;
//Crear usuario
 crearUsuario(){
  const user ={
    nombre: this.validateForm.value.userName,
    codigo: this.validateForm.value.codigo,
    correo: this.validateForm.value.email,
    celular: this.validateForm.value.telefono,
    pass: this.validateForm.value.password
  };
  this.userService.CrearUser(user).subscribe(data => {
    if(data.success){       
      const dataUser = data.data;  
      console.log("data:",dataUser);              
          this.userService.setIdUserCreado(dataUser._id);
          this.isVisible = true;
          this.obtenerDatosRol();          
        }else{
          this.modal.error({
            nzTitle: '¡Datos invalidos!',
            nzContent: 'El usuaio no se ha podido crear'
          });  
    }
  })
 }
 //Rellenar select con los roles creados en base de datos
 obtenerDatosRol(): void{ 
  console.log ("Datos seleccion", this.validateForm.value.opcionSeleccionado);
  /*this.verSeleccion = this.validateForm.value.opcionSeleccionado;   
  console.log ("Datos seleccionado del rol", this.verSeleccion);*/
 }
//Obtener el rol del usuario creado
 handleOk(): void {
   this.isOkLoading = true;   
   const idUser = this.userService.getIdUserCreado();  
   setTimeout(() => {
     this.isVisible = false;
     this.isOkLoading = false;
   }, 1000);
   this.modal.success({
    nzTitle: 'Registro de usuario',
    nzContent: '¡Se ha registrado el usaurio con exito!'
    });
  }
  handleCancel(): void {
    this.isVisible = false;
  }

 //---------------------------------------------
  submitForm(): void {
   this.crearUsuario();
   this.validateForm.reset();
  }
  //Metodo de cancelar y limbiar los campos del registro
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }
}
