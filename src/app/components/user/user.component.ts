import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ItemData {
  id: string;
  name: string;
  numberId: string;
  nameProject: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  i = 0;
  editId: string | null = null;
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }
  constructor( private router: Router) {}
  addRow(): void {
    /*this.router.navigate(['/CreateUser']);*/
    this.listOfData = [
      {
        id: `${this.i}`,
        name: `Natalia Sanchez`,
        numberId: '9010521358',
        nameProject: `Administración de proyecto de grado del area de Ingeniería de sistemas`,
      },
      {
        id: `${this.i+1}`,
        name: `Yecid Pimiento`,
        numberId: '9010521478',
        nameProject: `Administración de proyecto de grado del area de Ingeniería de sistemas`
     }      
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }
}
