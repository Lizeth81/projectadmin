import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URLApiObtenerUsuario ='http://localhost:3500/api/seira/datosUsuario';

  constructor(private http: HttpClient) {}

  public Login(user: any): Observable<any>{
    console.log("Servidor: ", user);
    return this.http.post<any>("http://localhost:3500/api/seira/loginUsuario", user);
  }
  public CrearUser(user: any): Observable<any>{
    return this.http.post<any>("http://localhost:3500/api/seira/datosUsuario", user);
  }

   public getUsers(): Observable<any>{
     return this.http.get<any>(this.URLApiObtenerUsuario);
   }

  
}
