import { Component } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

<<<<<<< HEAD
interface ItemData {
  id: string;
  mes: string;  
  entregaEstudiante: string;
  sesionComite: string;
  entregaPropuesta: string;
=======
interface DataItem {
  proceso: string;
  entrega: string;
  comite: number;
  resultado: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
>>>>>>> 225d08174d40b34268d90a4b13329ddf507bed57
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {
<<<<<<< HEAD
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

=======
 
 
    data = [
      {
        proceso: 'Propuesta de trabajo de grado',
        entrega: '26 de noviembre',
        comite: '06 de diciembre',
        resultado: '24 de diciembre'
      },
      {
        proceso: 'Anteproyecto',
        entrega: '26 de noviembre',
        comite: '06 de diciembre',
        resultado: '24 de diciembre'
      },
      {
        proceso: 'Proyecto Final',
        entrega: '26 de noviembre',
        comite: '06 de diciembre',
        resultado: '24 de diciembre'
      }
    ];
  
>>>>>>> 225d08174d40b34268d90a4b13329ddf507bed57
 
}
