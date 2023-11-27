import { Component } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

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
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {
 
 
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
  
 
}
