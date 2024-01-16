import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UsersService } from 'src/app/services/users.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  data: any[] = [];
  usersEstudiante: any[] = [];
  estudiante:  any[] = [];

  constructor(public userService: UsersService, 
    public projectService: ProyectoService,
    private modal: NzModalService) {}

  ngOnInit(): void {
    this.llenarDatoProyecto();
  }

  llenarDatoProyecto(){
    this.projectService.proyectos().subscribe(data => {
      this.data = data;
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        this.usersEstudiante = element.estudiante;
        for (let j = 0; j < this.usersEstudiante.length; j++) {
          this.estudiante.push(this.usersEstudiante[j].nombre);
          console.log("Estudiantes:", this.estudiante);          
        }
      }
      
    })
  }
}
