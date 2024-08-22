import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proposed-grade-jurado',
  templateUrl: './proposed-grade-jurado.component.html',
  styleUrl: './proposed-grade-jurado.component.css'
})
export class ProposedGradeJuradoComponent implements OnInit{

  nombreProyecto:string ='';
  comentario:string ='';
  datoProyecto:any={};

  constructor(
    public userService: UsersService,
    public proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.proyectoService.proyectos().subscribe(data =>{

    });
  }
  
}
