import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CalendarService{

  constructor(private http: HttpClient, private cookies: CookieService) { }

  //Métodos Mostrar datos del calendario
  getCalendar(): Observable<any>{
    return this.http.get<any>("http://localhost:3500/api/datosCalendario");
  }
//Actualizar el año y el periodo
  putCalendarioPeriodoYear(data: any): Observable<any>{
    const idCale = this.getCalendarioId();
    return this.http.put<any>("http://localhost:3500/api/actualizarCalendario/"+idCale, data);
  }

    //Métodos procesos
    setCalendarioId(datos: any){
      localStorage.setItem('idCalendario', JSON.stringify(datos));
   }
    getCalendarioId(){
      return JSON.parse(localStorage.getItem('idCalendario') || '');
    }
   //Método a¿para mostrar los procesos activos del calendario
    getProcesos(idCale: any): Observable<any>{
      return this.http.get<any>("http://localhost:3500/api/datosProcesos/"+idCale);
    }
    //Método para agregar un proceso al calendario
    postDatosProcesos(idCale: any, body: any): Observable<any>{
      return this.http.post<any>("http://localhost:3500/api/agregarProcesos/"+idCale, body);
    }
    //Metodo para eliminar un proceso
    deleteDatoProceso(idCale: any, idProceso: any): Observable<any>{
      return this.http.delete<any>("http://localhost:3500/api/eliminarProceso/"+idCale+"/"+idProceso);
    }
    //Metodo para mostrar el metodo a editar
    getDatoDelProcesoEditar(idCal: any, idProceso: any): Observable <any>{
      return this.http.get<any>("http://localhost:3500/api/datoDelProceso/"+idCal+"/"+idProceso);
    }
    //Metodo para editar un proceso
    putDatoProceso(idCal: any, idProceso: any, body: any): Observable <any>{
      return this.http.put<any>("http://localhost:3500/api/actualizarProcesos/"+idCal+"/"+idProceso, body);
    }
}
