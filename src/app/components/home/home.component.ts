import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Datos: any[] = []; 
  periodo:string='';
  fecha = new Date().toDateString();
  
  constructor( public calendarService: CalendarService){}

  ngOnInit(): void {
    this.agregarDatosCalendario();
  }

   agregarDatosCalendario(){
    this.calendarService.getCalendar().subscribe(data => {
      this.Datos = data;
      console.log("Datos", this.Datos);
      this.periodo = data[1].periodo;
      //this.Datos.forEach((data) => this.fecha = data[4].fechaEntregada);         
    })
  }
   
}
