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
  idProject: String = '';
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
  notaFinal: boolean=false;
  dato: boolean=true;

  constructor(
    public userService: UsersService,
    public proyecService: ProyectoService,
    private message: NzMessageService, 
    private router: Router) {}

/**Cerrar sesión*/
isVisible = false;
isConfirmLoading = false;
isVisibleModal: boolean = false;

signOut(): void {
    this.isVisible = true;
  }

getUserLogged() { 
  this.idUser = this.userService.getUserLogueId(); 
  this.userService.getUserLogged(this.idUser).subscribe((data) => {  
    this.users = data;
    this.userService.getNombreRolUsuario(data.rol).subscribe((dataRol) => { 
      console.log("Rol", dataRol);
      if(dataRol== 'Estudiante'){
        this.notaFinal=true;
        this.proyecService.proyectos().subscribe(data => {
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            this.usersEstudiante = element.estudiante;            
            for (let i = 0; i < this.usersEstudiante.length; i++) {
              this.idUserProject = this.usersEstudiante[i]._id;      
              if(this.idUser ==  this.idUserProject){
                console.log("tiene proyecto");
                this.proyecService.agregarProcPropuestaGrado(this.dato);
                this.procesoTrabajo = element.proceso;   
                this.idProject = element._id;   
                this.proyecService.setIdProyecto(this.idProject);
                this.proyecService.setProceso(this.procesoTrabajo);                
              }    
            }        
          }
          if(this.procesoTrabajo == "Sustentacion"){
            this.sustentacion=true;
          }else if(this.procesoTrabajo == "Anteproyecto"){
            this.anteproyecto=true;
          }else if(this.procesoTrabajo == "Trabajofinal"){
            this.trabajoFinal = true;
          }else{
            console.log("no tiene ningun proyecto asignado"); 
            this.propuestaGrado=true;
          }  
        });         
        } else if(dataRol == 'Administrador'){
          this.MenuAdmin=true;
          this.adminUser=true;
          this.project=true;
        }else if(dataRol == 'Jurado'){
          this.MenuAdmin=true;
        }else{
          this.MenuAdmin=true;
        }
    });  
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

 handleOk(): void {
  console.log('Button ok clicked!');
  this.isVisibleModal = false;
}

handleCancel(): void {
  console.log('Button cancel clicked!');
  this.isVisibleModal = false;
}
ngOnInit(): void {
  this.getUserLogged();
}

showModal() {
  this.isVisibleModal = true;
}

}
