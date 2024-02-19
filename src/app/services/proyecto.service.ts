import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient, private cookies: CookieService) { }
//FormData: FormData,
  guardarProyecto(FormData: FormData): Observable<any>{
    return this.http.post("http://localhost:3500/api/registarProyecto", FormData);
  }

  proyectos():Observable<any>{
    return this.http.get<any>("http://localhost:3500/api/datosproyecto");
  }

  //datos del proyecto
  datoProyecto(id: any):Observable<any>{
    return this.http.get<any>("http://localhost:3500/api/datoproyecto/"+id);
  }

  actualizarEstado(id: string, data: any):Observable<any> {
    return this.http.put<any>(`http://localhost:3500/api/actualizarProyecto/${id}`, data);
  }

//----------------guarda el id del proyecto--------------
setIdProyecto(idProyecto: any){
  localStorage.setItem('idProyecto', JSON.stringify(idProyecto));
}
getIdProyecto(){ 
  return JSON.parse(localStorage.getItem('idProyecto') || '');
}
//----------------Guarda el proceso del proyecto---------------
  setProceso(proceso: any){
    localStorage.setItem('Proceso', JSON.stringify(proceso));
  }
  getProceso(){ 
    return JSON.parse(localStorage.getItem('Proceso') || '');
  }


}
