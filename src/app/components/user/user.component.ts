import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

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
export class UserComponent implements OnInit{

  constructor(private modal: NzModalService) {}

  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];
  i = 0;
  editId: string | null = null;
  selectedValue = null;

  startEdit(id: string): void {
    //this.editId = id;
    this.editCache[id].edit = true;
  }
  stopEdit(): void {
    this.editId = null;
  }
  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }
  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
      this.modal.success({
        nzTitle: 'Datos editados correctamente',
        nzContent: 'Se guardo con exito los datos registrados.'
      });
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  addRow(): void {
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
    this.updateEditCache();
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
    this.addRow();
  }
}
