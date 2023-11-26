import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private message: NzMessageService,  private router: Router) {}
/**Cerrar sesión*/
isVisible = false;
isConfirmLoading = false;

signOut(): void {
    this.isVisible = true;
  }

handleOk(): void {
  this.isConfirmLoading = true;
  setTimeout(() => {
    this.isVisible = false;
    this.isConfirmLoading = false;
    this.message.success('¡Sesión cerrado con exito!');       
    });
    this.router.navigate(['/Login']);
 }

handleCancel(): void {
  this.isVisible = false;
}
}