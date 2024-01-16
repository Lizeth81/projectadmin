import { Component } from '@angular/core';

import { NzModalService } from 'ng-zorro-antd/modal';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzCascaderFilter } from 'ng-zorro-antd/cascader';


interface ItemData {
  numero: string;
  proyecto: string;
  proceso: string;
  estado: string;
  nota: number;
}

@Component({
  selector: 'app-proposed-grade-admin',
  templateUrl: './proposed-grade-admin.component.html',
  styleUrl: './proposed-grade-admin.component.css'
})
export class ProposedGradeAdminComponent {
  //value?: string;
  constructor(private modal: NzModalService) {}
  listOfData: ItemData[] = [];
  i = 0;
 /* editId: string | null = null; 
  selectedValue = null;
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  startEdit(id: string): void {
    this.editId = id;
  }
  stopEdit(): void {
    this.editId = null;
  }
  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }
  */
  ngOnInit(): void {
  }
  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
     /* {
        numero: `${this.i}`,
        proyecto: `${this.i}`,
        proceso: ``,
        estado: ``,
        nota:
      },*/
    ];
    this.i++;
  }
  
}
