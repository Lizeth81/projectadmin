import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  año = new FormControl();
  periodo= new FormControl('');
  proceso= new FormControl('');
  fechaEntrega= new FormControl('');
  fechaSesioncomite= new FormControl('');
  fechaResultado= new FormControl('');
  validateForm= new FormControl('');
    
    listOfData: any[] = [];
    users: any = {};
    usersRol: any = {};
    botoneAgregar:boolean= false;
    botoneEditar:boolean= false;
    botoneEliminar:boolean= false;
    isVisibleAdd = false;
    isVisibleEdit = false;
    DatosPeriodo: any[] = [];
    DatosProcesos: any[] = [];
    OpcPeriodo: String = '0';
    OpcProceso: String = '';
    date = null;

  Datos: any[] = []; 
  periodos:string='';
  fecha = new Date().toDateString();
  
  constructor( 
    public calendarService: CalendarService,
    public userService: UsersService,
    private fb: NonNullableFormBuilder,
    private modal: NzModalService){
      this.DatosPeriodo=['A', 'B'];
      this.DatosProcesos=['Propuesta de trabajo grado', 'Anteproyecto', 'Proyecto Final', 'Sustentación'];
    }

  //Métodos de los botones del admin   
    VisualizarModalAdd(){
      this.isVisibleAdd = true;
    }
    agregarDatosCalendario(){
      const dataCalendario = {
        proceso: this.proceso, 
        año: this.año, 
        fechaEntrega: this.fechaEntrega,
        fechaSesioncomite: this.fechaSesioncomite,
        fechaResultado: this.fechaResultado};
  
        this.calendarService.AddCalendario(dataCalendario).subscribe(data => {        
          console.log("Datos del calendario:", data);
          this.modal.success({
              nzContent: '¡Datos registrados con exito!'
              }); 
          });
    }
    editarDatosCalendario(){
      this.isVisibleEdit=true;
    }
    eliminarDatosCalendario(){  
    }
    mostrarDatosUsuario(){
      const id = this.userService.getUserLogueId(); 
      this.userService.getUserLogged(id).subscribe((data) => {  
      this.users=data;
      this.usersRol = data.rol;   
      if(this.usersRol == 'Administrador'){
        this.botoneAgregar=true;
        this.botoneEditar=true;
        this.botoneEliminar=true;
      } 
    });
    }
    handleOk(): void {
      this.isVisibleAdd = false;
    }
  
    handleCancel(): void {
      this.isVisibleEdit = false;
    }
  
   
  //Método de la fecha
    onChange(result: Date): void {
      this.isVisibleAdd = false;
      this.isVisibleEdit  = false;
    }
  //Botonoes de las acciones del modal
   Cancel(): void {
      this.isVisibleAdd = false;
      this.isVisibleEdit  = false;
    }

    ///////////

  ngOnInit(): void {    
    this.mostrarDatosUsuario();
    this.ObtenerDatosCalendario();
  }

   ObtenerDatosCalendario(){
    this.calendarService.getCalendar().subscribe(data => {
      this.Datos = data;
      console.log("Datos", this.Datos);
      this.periodo = data[1].periodo;
      //this.Datos.forEach((data) => this.fecha = data[4].fechaEntregada);         
    })
  }
   
}
