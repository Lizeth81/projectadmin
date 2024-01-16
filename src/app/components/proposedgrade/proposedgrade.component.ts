import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-proposedgrade',
  templateUrl: './proposedgrade.component.html',
  styleUrls: ['./proposedgrade.component.css']
})
export class ProposedgradeComponent implements OnInit {

  //Variables del formulario
  validateForm: FormGroup<{
    titulo: FormControl<string>;
    fecha: FormControl<Date>;
    proceso: FormControl<string>;
    integrante1: FormControl<string>;
    integrante2: FormControl<string>;
    integrante3: FormControl<string>;
    lineaInvestigacion: FormControl<string>;
    semilleroInvestigacion: FormControl<string>;
    estadoProceso: FormControl<string>;
    radioValue: FormControl<string>;
  }> = this.fb.group({
    titulo: ['', [Validators.required]],
    fecha: [new Date(),  [Validators.required]],
    proceso: ['', [Validators.required]],
    integrante1: ['', [Validators.required]],
    integrante2: ['',  [Validators.required]],
    integrante3: ['', [Validators.required]],
    lineaInvestigacion: ['', [Validators.required]],
    semilleroInvestigacion: ['', [Validators.required]],
    estadoProceso: ['', [Validators.required]],
    radioValue: ['', [Validators.required]]
  });

  datasemillero:boolean=false;
  SolicitudPropuesta:boolean =true;
  TablaEstado:Boolean= false;
  integrante2:boolean = false;
  integrante3:boolean= false;
  botonIngresarIntegrante:boolean = true;
  dataprueba: any[] = [];



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
        name: 'Presentación del Proyector de grado',
      }
    ];
  
    constructor(
      private http: HttpClient, 
      private msg: NzMessageService,
      private proyectoService: ProyectoService,
      private fb: NonNullableFormBuilder,) {
       
      }

  ngOnInit(): void {
    
  }

    //contenido del panel 1
    uploading = false;
    fileListDirector: NzUploadFile[] = [];
    
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

     //captcha Icono de información sobre herramientas( solo puede agg 3 integrantes)
     AgregarIntegrante(e?: MouseEvent): void {
        if(!this.integrante2){
          this.integrante2 = true;
          e?.preventDefault();
        }else{
          this.integrante3 = true;
          this.botonIngresarIntegrante=false;
        }
     }
   
    //subir archivo del formulario del trabajo de grado
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
    //Semillero de investigacion
    semillero(){      
      if(this.validateForm.value.radioValue === 'A'){
        console.log("Radio: ", this.validateForm.value.radioValue);
        this.datasemillero=true;
      }else if(this.validateForm.value.radioValue === 'B'){
        this.datasemillero=false;
      }
    }
    //Guardar Datos del proyecto
    enviarDatosProyecto(){
     const dataProject = {
        titulo: this.validateForm.value.titulo,
        fecha: this.validateForm.value.fecha,
        proceso: 'Propuesta de grado',
        lineaInvestigacion: this.validateForm.value.lineaInvestigacion,
        semilleroInvestigacion: this.validateForm.value.semilleroInvestigacion,
        estadoProceso: 'Pendiente'
      };
      console.log("datos del proyecto:", dataProject);
      this.proyectoService.guardarProyecto(dataProject).subscribe(data => { 
        this.dataprueba = data; 
        if(data.success){
          this.msg.success('Datos cargados con exito');
          this.SolicitudPropuesta=false;
          this.TablaEstado = true;
        } else{
          this.msg.error('Datos errados');
        }          
         console.log("Datos del proyecto:", data);
        });
    }

   
//Botones
    GuardarTrabajo(){
   
    }
    Cancelar(){
      this.msg.warning('Cancelar formulario');
    }

}
