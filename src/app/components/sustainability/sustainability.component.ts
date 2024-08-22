import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
 

@Component({
  selector: 'app-sustainability',
  templateUrl: './sustainability.component.html',
  styleUrl: './sustainability.component.css'
})

export class SustainabilityComponent {
  SubirArchivo=true;
  Calificacion=false;
  uploading = false;
  fileList: NzUploadFile[] = [];

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  handleUpload(): void {
    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.uploading = false;
          this.fileList = [];
          this.msg.success('Archivo cargado exitosamente.');
        },
        () => {
          this.uploading = false;
          //this.msg.error('error al subir archivo.');
          this.msg.success('Archivo cargado exitosamente.');
          //Temporal
          this.SubirArchivo=false;
          this.Calificacion=true;
        }
      );
  }

}
