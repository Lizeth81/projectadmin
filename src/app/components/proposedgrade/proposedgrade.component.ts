import { Component } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-proposedgrade',
  templateUrl: './proposedgrade.component.html',
  styleUrls: ['./proposedgrade.component.css']
})
export class ProposedgradeComponent {

  SolicitudPropuesta:boolean =true;
  TablaEstado:Boolean= false;
    //Paneles
    panels1 = [
      {
        active: false,
        disabled: false,
        name: 'Solicitud Dirección y/o Codirección Propuestad de Grado',
      }
    ];
    panels2 = [
      {
        active: false,
        disabled: false,
        name: 'Solicitud de Cordinador ',
      }
    ];
    panels3 = [
      {
        active: false,
        disabled: false,
        name: 'Presentación del Proyector de grado',
      }
    ];
  
  
    //contenido del panel 1
    uploading = false;
    fileListDirector: NzUploadFile[] = [];
  
    constructor(private http: HttpClient, private msg: NzMessageService) {}
  
    ///Subir archivo Director y/o cordinador
    AntesCargarDirector = (file: NzUploadFile): boolean => {
      this.fileListDirector = this.fileListDirector.concat(file);
      return false;
    };
  
    SubirArchivoDirector(): void {
      const formData = new FormData();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.fileListDirector.forEach((file: any) => {
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
            this.fileListDirector = [];
            this.msg.success('subir exitosamente.');
          },
          () => {
            this.uploading = false;
            //this.msg.error('upload failed.');
            this.msg.success('subir exitosamente.');
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
    }
    Cancelar(){
      this.msg.warning('Cancelar formulario');
    }
  ///////////////////////////////////////////////////////////////
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

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }
}
