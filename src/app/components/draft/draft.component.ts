import { Component } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent {
    project = {
    nameProject: '',
  }
    /*Fecha*/
    date = new Date();
    fecha = this.date;
    /*Nombre del proyecto*/

  /*Funcion del boton cargar archivo*/
  fileList: NzUploadFile[] = []; 

 /*Ver comentario*/
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }
}
