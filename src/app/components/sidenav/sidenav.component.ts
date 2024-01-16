import { Component, OnInit} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  users: any = {};
  usersRol: any[] = [];
  usersEstudiante: any[] = [];
  idUser: String = '';
  idUserProject: String = '';
  procesoTrabajo: String = '';
  propuestaGrado:boolean=false;
  anteproyecto:boolean=false;
  trabajoFinal:boolean=false;
  sustentacion:boolean=false;
  MenuEstudiante:boolean=false;
  MenuJurado:boolean=false;
  MenuDirector:boolean=false;
  MenuAdmin:boolean=false;
  adminUser:boolean=false;
  project: boolean=false;

  constructor(
    public userService: UsersService,
    public proyecService: ProyectoService,
    private message: NzMessageService, 
    private router: Router) {}

/**Cerrar sesión*/
isVisible = false;
isConfirmLoading = false;

signOut(): void {
    this.isVisible = true;
  }

getUserLogged() { 
  this.idUser = this.userService.getUserLogueId(); 
  this.userService.getUserLogged(this.idUser).subscribe((data) => {  
    this.users = data;
    this.usersRol = data.rol;
    let rol =[];
    for(let i of this.usersRol){
      rol.push(i.nombre);
    } 
    const roles = rol.toString();
   if(roles == 'Estudiante'){
      this.proyecService.proyectos().subscribe(data => {
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          this.usersEstudiante = element.estudiante;
          
          for (let i = 0; i < this.usersEstudiante.length; i++) {
            this.idUserProject = this.usersEstudiante[i]._id;    
            if(this.idUser ==  this.idUserProject){
              this.procesoTrabajo = element.proceso;
              console.log("Proceso:", this.procesoTrabajo);
              if(this.procesoTrabajo == "Sustentacion"){
                this.sustentacion=true;
              }else if(this.procesoTrabajo == "Anteproyecto"){
                this.anteproyecto=true;
              }else if(this.procesoTrabajo == "Trabajofinal"){
                this.trabajoFinal = true;
              }else{
                this.propuestaGrado=true;
              }
            }      
          }        
        }
      });         
      } else if(roles == 'Administrador'){
        this.MenuAdmin=true;
        this.adminUser=true;
        this.project=true;
      }else if(roles == 'Jurado'){
        this.MenuJurado=true;
      }else{
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
