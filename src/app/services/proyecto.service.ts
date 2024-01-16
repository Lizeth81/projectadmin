import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  guardarProyecto(projectData: any): Observable<any>{
    return this.http.post<any>("http://localhost:3500/api/registarProyecto", projectData);
  }

  proyectos():Observable<any>{
    return this.http.get<any>("http://localhost:3500/api/datosproyecto");
  }
}
