import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzTableQueryParams } from 'ng-zorro-antd/table';

interface listprojects {
  id: string;
  proyecto: string;
  estado: string;
  accion: string;
}

@Injectable({ providedIn: 'root' })

export class RandomUserService {
  randomUserUrl = 'https://api.randomuser.me/';

  getUsers(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filters: Array<{ key: string; value: string[] }>
  ): Observable<{ results: listprojects[] }> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', `${sortField}`)
      .append('sortOrder', `${sortOrder}`);
    filters.forEach(filter => {
      filter.value.forEach(value => {
        params = params.append(filter.key, value);
      });
    });
    return this.http
      .get<{ results: listprojects[] }>(`${this.randomUserUrl}`, { params })
      .pipe(catchError(() => of({ results: [] })));
  }

  constructor(private http: HttpClient) {}
}         

@Component({
  selector: 'app-proposedgrade-admin',
  templateUrl: './proposedgrade-admin.component.html',
  styleUrls: ['./proposedgrade-admin.component.css']
})
export class ProposedgradeAdminComponent implements OnInit{
  total = 1;
  listOfData: listprojects[] = [];
  listOfRandomUser: listprojects[] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  filterGender = [
    { text: 'Negado', value: 'Negado' },
    { text: 'Pendiente', value: 'Pendiente' },
    { text: 'Aprobado', value: 'Aprobado' }
  ];

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    this.loading = true;
    this.randomUserService.getUsers(pageIndex, pageSize, sortField, sortOrder, filter).subscribe(data => {
      this.loading = false;
      this.total = 5; // mock the total data here
      this.listOfRandomUser = data.results;
    });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log(params);
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }

  // addRow(): void {
  //   this.listOfData = [
  //     {
  //       id: `${this.i}`,
  //       proyecto: `Natalia Sanchez`,
  //       estado: '9010521358',
  //       accion: `Administración de proyecto de grado del area de Ingeniería de sistemas`,
  //     },
  //     {
  //       id: `${this.i+1}`,
  //       proyecto: `Yecid Pimiento`,
  //       estado: '9010521478',
  //       accion: `Administración de proyecto de grado del area de Ingeniería de sistemas`
  //    }      
  //   ];
  //   this.i++;
  //   this.updateEditCache();
  // }

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
  }

}


