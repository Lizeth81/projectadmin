import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { UsersService } from 'src/app/services/users.service';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators
} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DatePipe } from '@angular/common';
import { DatePickerService } from 'ng-zorro-antd/date-picker/date-picker.service';
import { da } from 'date-fns/locale';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Datos para agg un nuevo dato del calendario
  validateForm: FormGroup<{
    year: FormControl<string>;
    periodo: FormControl<string>;
    proceso: FormControl<string>;
    fechaEntrega: FormControl<Date>;
    fechaSesioncomite: FormControl<Date>;
    fechaResultado: FormControl<Date>;
  }> = this.fb.group({
    year: ['', [Validators.required]],
    periodo: ['', [Validators.required]],
    proceso: ['', [Validators.required]],
    fechaEntrega: [new Date, [Validators.required]],
    fechaSesioncomite: [new Date, [Validators.required]],
    fechaResultado: [new Date, [Validators.required]]
  }); 

  //Visualizar los botones del crud  
  verBotonesActualizar:boolean= false;
  verBotonesAgg:boolean= false;

  //Variables        
    usersRol: any = {};
    datosCalendario:any[] = [];
    datosProcesos:any[] = [];
    datoEditarProceso: any[]=[];
    years: any[]= [];
    periodo= ['A', 'B'];
    proceso=['Propuesta de trabajo grado', 'Anteproyecto', 'Proyecto Final', 'Sustentación'];
    visibleActualizar = false;
    visibleAgg = false;
    visibleEditarProceso = false;

    openactualizar(): void {
      this.visibleActualizar = true;
    }
    openagg(): void {
      this.visibleAgg = true;
    }
  
    closeactualizar(): void {
      this.visibleActualizar = false;
    }
    closeagg(): void {
      this.visibleAgg = false;
    }
  constructor( 
    public calendarService: CalendarService,
    public userService: UsersService,
    private fb: NonNullableFormBuilder,
    private modal: NzModalService){
      //El año del calendario agendar 
      const year = new Date().getFullYear();
      const años: any=[];     
      for (let index = 2020; index <= year+1; index++) {
        años.push(index);  
        this.years = años     
      }   

    }
  //Acciones de los botones del agregar en el calendario si es administrador
    ActualizarDatosCalendarioPeriodoYear(){
      if(this.validateForm.value.periodo == ''){
        this.modal.error({
          nzContent: '¡Datos del periodo no validados!'
        });
      }else if (this.validateForm.value.year == ''){
        this.modal.error({
          nzContent: '¡Datos del año no validados!'
        });        
      }else{
        const dataCalendario = {
          periodo: this.validateForm.value.periodo, 
          year: this.validateForm.value.year};

          this.calendarService.putCalendarioPeriodoYear(dataCalendario).subscribe(data => { 
            this.modal.success({
                nzContent: '¡Datos registrados con exito!'
                });
                this.ObtenerDatosCalendario();
                this.validateForm.reset(); 
            });
      }       
       this.visibleActualizar = false;
    }

    //Acciones de los botones del ditar en el calendario si es administrador
    aggDatosCalendarioProcesos(){
      const dataCalendarioProceso = {
        nombre: this.validateForm.value.proceso, 
        fechaEntrega: this.validateForm.value.fechaEntrega,
        fechaSesioncomite: this.validateForm.value.fechaSesioncomite,
        fechaResultado: this.validateForm.value.fechaResultado
      };
      const id = this.calendarService.getCalendarioId(); 
      console.log("Datos que envia: ", dataCalendarioProceso);
      this.calendarService.postDatosProcesos(id, dataCalendarioProceso).subscribe(data => { 
        console.log("Msj:", data);
          this.modal.success({
              nzContent: '¡Datos registrados con exito!'
              });
              this.visibleAgg = false;
              this.ObtenerDatosCalendario();
              this.validateForm.reset();
      });
    }
    //Acciones de los botones del ditar en el calendario si es administrador
    editarDatosCalendario(idProceso: string): void { 
      this.visibleEditarProceso=true;
      const idCal = this.calendarService.getCalendarioId();
      this.calendarService.getDatoDelProcesoEditar(idCal, idProceso).subscribe(data=>{
       /* this.validateForm.value.proceso= data.nombre;
        this.validateForm.value.fechaEntrega = data.fechaEntrega;
        console.log("nombre del proceso", this.validateForm.value.proceso);
        console.log("nombre del fecha entrega", this.validateForm.value.fechaEntrega);*/
      })
    }
  //Acciones de los botones del eliminar en el calendario si es administrador
    eliminarDatosCalendario(id: string): void { 
      const idCal = this.calendarService.getCalendarioId(); 
      this.calendarService.deleteDatoProceso(idCal, id).subscribe(data =>{
         console.log("Respuesta: ",data);
         this.modal.success({
          nzContent: '¡Los datos se han eliminado con exito!'
          }); 
          this.ObtenerDatosCalendario();
      });
    }
//Se extrae los datos del usuario para obtener el rol y poder validar el crud del calendario
    mostrarDatosUsuario(){
      const id = this.userService.getUserLogueId(); 
      this.userService.getUserLogged(id).subscribe((data) => {  
      this.usersRol = data.rol;
      let rol =[];
      for(let i of this.usersRol){
        rol.push(i.nombre);
      } 
      const roles = rol.toString() 
      console.log("RolUser", roles);  
      if(roles == 'Administrador'){
        this.verBotonesActualizar=true;
      } 
    });
    }
 
  //Mostrar los datos del calendario en la tabla
   ObtenerDatosCalendario(){
      this.calendarService.getCalendar().subscribe(data => {
       this.datosCalendario = data;
       this.calendarService.setCalendarioId(data[0]._id);
       const id = this.calendarService.getCalendarioId();
        this.calendarService.getProcesos(id).subscribe(data => {
          this.datosProcesos = data;
          for (let index = 0; index < data.length; index++) {
            if(index < 3){
              this.verBotonesAgg=true;
            }else{
              this.verBotonesAgg=false;
            }
          }
          }); 
      }); 
      return this.datosProcesos;
    }

  //Metodos del modal
  cancelar(){
    this.visibleEditarProceso=false;
  }
  aceptar(){
    this.visibleEditarProceso=false;
  }

  ngOnInit(): void {
    this.ObtenerDatosCalendario();
    this.mostrarDatosUsuario(); 
    
  }
 
}
