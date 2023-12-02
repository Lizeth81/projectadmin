import { Component, OnInit} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  users: any = {};
  inicio:boolean=false;
  proyecto:boolean=false;
  trabajoGrado:boolean=false;
  adminUser:boolean=false;
  calendario:boolean=false;

  constructor(
    public userService: UsersService,
    private message: NzMessageService, 
    private router: Router) {}

/**Cerrar sesión*/
isVisible = false;
isConfirmLoading = false;

signOut(): void {
    this.isVisible = true;
  }

getUserLogged() { 
  const id = this.userService.getUserLogueId(); 
  this.userService.getUserLogged(id).subscribe((data) => {  
      this.users = data.rol; 
      console.log("Rol:", this.users);  
      if(this.users == 'Estudiante'){
        this.inicio=true;
        this.proyecto=true;
        this.trabajoGrado=true;
      } else if(this.users == 'Administrador'){
        this.adminUser=true;
        this.calendario=true;
      }else if(this.users == 'Jurado'){
        this.inicio=true;
        this.trabajoGrado=true;
      }else{
        this.inicio=true;
        this.trabajoGrado=true;
      }
    });
}
//Método para cerrar sesión
logout(): void {
  this.isConfirmLoading = true;
  setTimeout(() => {
    this.isVisible = false;
    this.isConfirmLoading = false;
    this.message.success('¡Sesión cerrado con exito!');       
    });
    this.userService.DeleteToken();
    localStorage.clear();//Elimina todos los elementos
    this.router.navigateByUrl("/Login");
 }

handleCancel(): void {
  this.isVisible = false;
}
ngOnInit(): void {
  this.getUserLogged();
}
}
