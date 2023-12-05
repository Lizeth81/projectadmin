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
  usersRol: any = {};
  inicio:boolean=false;
  MenuEstudiante:boolean=false;
  MenuJurado:boolean=false;
  MenuDirector:boolean=false;
  MenuAdmin:boolean=false;
  adminUser:boolean=false;

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
    this.users=data;
      this.usersRol = data.rol; 
      console.log("Rol:", this.users);  
      if(this.usersRol == 'Estudiante'){
        this.inicio=true;
        this.MenuEstudiante=true;
      } else if(this.usersRol == 'Administrador'){
        this.inicio=true;
        this.MenuAdmin=true;
        this.adminUser=true;
      }else if(this.usersRol == 'Jurado'){
        this.inicio=true;
        this.MenuJurado=true;
      }else{
        this.inicio=true;
        this.MenuDirector=true;
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
