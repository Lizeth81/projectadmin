import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  data: any[] = [];
  user: any[] = [];
  usersRol: any[] = [];
  rolUser: string ='';
  i: number = 0;

  constructor(public userService: UsersService, private modal: NzModalService) {}
  
  ngOnInit(): void {
    this.llenarDataTabla();
  }

  llenarDataTabla(){
    this.userService.getUsers().subscribe(data => {
      this.data = data; 
      
       for (let index = 0; index <= this.data.length; index++) {  
        this.user = data[index]; 
        console.log("user", this.user);
       /* this.userService.getUserLogged(this.userId).subscribe((data) => { 
          this.usersRol = data.rol; 
          console.log("rol", this.usersRol)       
          });*/
       }
      
    });
    
   /* for (let index = 0; index <= this.data.length; index++) {       
      this.userId = this.data[index].id;  //Id del usuario
      console.log("id", this.userId);
      this.userService.getUserLogged(this.userId).subscribe((data) => { 
       this.usersRol = data.rol;        
       });
     } 
      
      let rol =[];
         for(let i of this.usersRol){
           rol.push(i.nombre);
           this.rolUser = rol.toString();
         }
       
    this.i++;*/
  } 

}
