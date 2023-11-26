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
        entrega: 'John Brown',
        comite: 32,
        resultado: 'New York No. 1 Lake Park'
      },
      {
        proceso: 'Anteproyecto',
        entrega: 'Jim Green',
        comite: 42,
        resultado: 'London No. 1 Lake Park'
      },
      {
        proceso: 'Proyecto Final',
        entrega: 'Joe Black',
        comite: 32,
        resultado: 'Sidney No. 1 Lake Park'
      }
    ];
  
 
}
