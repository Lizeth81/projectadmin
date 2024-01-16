import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) {}

  Login(user: any): Observable<any>{
    return this.http.post<any>("http://localhost:3500/api/seira/loginUsuario", user);
  }
  ///---------------------USUARIO-------------------------
//Id del usuario logueado
  setUserLogged(user: any){
    console.log("setUserLogueId", JSON.stringify(user));
     localStorage.setItem('id', JSON.stringify(user));
  }

  getUserLogueId(){ 
    console.log("getUserLogueId", JSON.parse(localStorage.getItem('id') || ''));
    return JSON.parse(localStorage.getItem('id') || '');
  }
 //Datos del usuario logueado
  getUserLogged(id: any): Observable<any>{
    return this.http.get<any>("http://localhost:3500/api/seira/datosUsuarioLogueado/"+id);
  }
  //Crear usuario desde el admin
  CrearUser(user: any): Observable<any>{
    return this.http.post<any>("http://localhost:3500/api/seira/registarUsuario", user);    
  }
//Obtener id del usuario creado desde el admin
  setIdUserCreado(user: any){
    console.log("setUserCreadoId", JSON.stringify(user));
    localStorage.setItem('idUserCreado', JSON.stringify(user));
  }
  getIdUserCreado(){ 
    console.log("getUserCreadoId", JSON.parse(localStorage.getItem('idUserCreado') || ''));
    return JSON.parse(localStorage.getItem('idUserCreado') || '');
  }
  //Obtener datos de los usuarios registrados
  getUsers(): Observable<any>{
    return this.http.get<any>("http://localhost:3500/api/seira/datosUsuario");
  }
  //Obtener el rol de cada usuario
  getRolUsuario(idUser: any, idRol: any):Observable<any>{
    return this.http.get<any>("http://localhost:3500/api/seira/datosRolUsuario/"+idUser+"/"+idRol);
  }
//-------------------ROL USUARIO------------------------------
//Guardar rol del usuario creado
  guardarRolUsuarioCreado(idUser: any, idRol: any): Observable<any>{
    return this.http.put<any>("http://localhost:3500/api/seira/registarRolUsuario/"+idUser, idRol);
  }
//Obtener los datos de los roles
  getDatosRoles(): Observable<any>{
    return this.http.get<any>("http://localhost:3500/api/datosRoles");
  }

   //---------------------TOKEN----------------------------

//Métodos para guardar token en cookies, para recuperar token y eliminar token
  
  setToken(token:string) {
    this.cookies.set("token", token);
   }  
  getToken(){
    return this.cookies.get("token");
   }
  DeleteToken(){
    return this.cookies.delete("token");
   }
  
}
