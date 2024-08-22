import { Component } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-preliminary-project',
  templateUrl: './preliminary-project.component.html',
  styleUrl: './preliminary-project.component.css'
})
export class PreliminaryProjectComponent {
  SolicitudPropuesta =true;
  TablaEstado= false;
  switchValue = false;
  DivSwitch = true;
    //Paneles
    panels1 = [
      {
        active: false,
        disabled: false,
        name: 'Anteproyecto de Grado',
      }
    ];
    panels2 = [
      {
        active: false,
        disabled: false,
        name: 'Presentacion Anteproyecto de Grado',
      }
    ];
    panels3 = [
      {
        active: false,
        disabled: false,
        name: 'Aval del Anteproyecto de Grado',
      }
    ];
  
  
    //contenido del panel 1
    uploading = false;
    fileList: NzUploadFile[] = [];
  
    constructor(private http: HttpClient, private msg: NzMessageService) {}
  
    ///Subir archivo Director y/o cordinador
    AntesCargarDirector = (file: NzUploadFile): boolean => {
      this.fileList = this.fileList.concat(file);
      return false;
    };
  
    SubirArchivoDirector(): void {
      const formData = new FormData();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.fileList.forEach((file: any) => {
        formData.append('files[]', file);
      });
      this.uploading = true;
      // You can use any AJAX library you like
      const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
        // reportProgress: true
      });
      this.http
        .request(req)
        .pipe(filter(e => e instanceof HttpResponse))
        .subscribe(
          () => {
            this.uploading = false;
            this.fileList = [];
            this.msg.success('Archivo cargado exitosamente.');
          },
          () => {
            this.uploading = false;
            //this.msg.error('upload failed.');
            this.msg.success('Archivo cargado exitosamente.');
          }
        );
    }
    //Formulario del trabajo de grado
     handleChange(info: NzUploadChangeParam): void {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.msg.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.msg.error(`${info.file.name} file upload failed.`);
      }
    }

    GuardarTrabajo(){
      this.msg.success('Datos cargados con exito');
      this.SolicitudPropuesta=false;
      this.TablaEstado = true;
      this.switchValue = false;
      this.DivSwitch = false;
    }
  ///////////////////////////////////////////////////////////////
  project = {
    nameProject: '',
  }
    /*Fecha*/
    date = new Date();
    fecha = this.date;
    /*Nombre del proyecto*/

  

 
}
