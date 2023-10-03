import { Component } from '@angular/core';


interface ItemData {
  id: string;
  name: string;  
  numberId: string;
  state: string;
  
}

@Component({
  selector: 'app-student-project',
  templateUrl: './student-project.component.html',
  styleUrls: ['./student-project.component.css']
})

export class StudentProjectComponent {
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
      {
        id: `${this.i}`,
        name: `Natalia Sanchez`,
        numberId: '9010521358',
        state: 'Activo'
      },
      {
        id: `${this.i+1}`,
        name: `Yecid Pimiento`,
        numberId: '9010521478',
        state: 'Activo'
     }      
    ];
    this.i++;
  }


  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }
}
