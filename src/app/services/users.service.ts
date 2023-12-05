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

  setUserLogged(user: any){
     localStorage.setItem('id', JSON.stringify(user));
  }

  getUserLogueId(){ 
    return JSON.parse(localStorage.getItem('id') || '');
  }
 
  getUserLogged(id: any): Observable<any>{
    return this.http.get<any>("http://localhost:3500/api/seira/datosUsuarioLogueado/"+id);
  }
  
  CrearUser(user: any): Observable<any>{
    return this.http.post<any>("", user);    
  }

  getUsers(): Observable<any>{
     return this.http.get<any>("http://localhost:3500/api/seira/datosUsuario");
   }

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
