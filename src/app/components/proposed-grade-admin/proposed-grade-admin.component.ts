import { Component } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';

interface ItemData {
  numero: string;
  proyecto: string;
  proceso: string;
  estado: string;
  nota: number;
}
@Component({
  selector: 'app-proposed-grade-admin',
  templateUrl: './proposed-grade-admin.component.html',
  styleUrl: './proposed-grade-admin.component.css'
})
export class ProposedGradeAdminComponent {

  isVisible = false;
  checked = true;
  projects: any;
  projectId: any;
  //value?: string;
  constructor( public projectService: ProyectoService )
  {}
  
  listOfData: ItemData[] = [];
  i = 0;
 /* editId: string | null = null; 
  selectedValue = null;
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  startEdit(id: string): void {
    this.editId = id;
  }
  stopEdit(): void {
    this.editId = null;
  }
  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }
  */
  ngOnInit(): void {
    this.projectService.proyectos().subscribe( (data: []) => {
      this.projects = data;
      this.projects.forEach((project: any) => {
          // console.log(project.estadoProceso)
          if( project.estadoProceso === 'Aprobado' ) {
            this.checked = true;
          }
      });
    })
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
     /* {
        numero: `${this.i}`,
        proyecto: `${this.i}`,
        proceso: ``,
        estado: ``,
        nota:
      },*/
    ];
    this.i++;
  }

  showModal(id: string): void {
    console.log(id);
    //traer el proyecto correspondiente al ID
    this.projectService.datoProyecto(id).subscribe( data => {
      this.projectId = data;
      console.log(this.projectId.titulo);

    })
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  async onCheckboxChange(event: any, estado: string, id: string) {
    console.log('id', id)
    if(event.target.checked) {
      this.projects.estadoProceso = estado;
      this.projectId.estadoProceso = estado;
      console.log(this.projectId);
      await this.projectService.actualizarEstado(id, this.projectId).subscribe( data => {
        
        console.log('Actualizado Estado!!');
      })
      
    } else {
      console.log('Desmarcado')
    }
  }

  async onCheckboxChangeProceso(event: any, proceso: string, id: string) {
    console.log('id', id)
    console.log('proceso', proceso)
    if(event.target.checked) {
      this.projects.proceso = proceso;
      this.projectId.proceso = proceso;
      console.log(this.projectId);
      await this.projectService.actualizarEstado(id, this.projectId).subscribe( data => {
        console.log('Actualizado proceso!!');
      })
      
    } else {
      console.log('Desmarcado')
    }
  }
  
}
