import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';


interface ItemData { 
  id: string; 
  proceso: string;
  entrega: string;
  comite: string;
  resultado: string;
}



@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit  {
  isVisible = false;
  isOkLoading = false;

  // formulario


 
 
  
  constructor(private modal: NzModalService) { }
  

  // modal
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.addRow;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  
    editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
    i = 0;
    editId: string | null = null;
    listOfData: ItemData[] = [];
    selectedValue = null;

    startEdit(id: string): void {
      this.editId = id;
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
        ...this.listOfData,
        {
          id: `${this.i}`,
          proceso: 'Proyecto Final',
          entrega: '01 de septiembre',
          comite: '15 de septiembre',
          resultado: '1 de octubre' 
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
