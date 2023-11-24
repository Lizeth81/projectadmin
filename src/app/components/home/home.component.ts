import { Component } from '@angular/core';

interface ItemData {
  id: string;
  mes: string;  
  entregaEstudiante: string;
  sesionComite: string;
  entregaPropuesta: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  i = 0;
  editId: string | null = null;
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }
  addRow(): void {
    /*this.router.navigate(['/CreateUser']);*/
    this.listOfData = [
            
    ];
    this.i++;
  }


  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }

 
}
