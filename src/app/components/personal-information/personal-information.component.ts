import { Component, OnInit } from '@angular/core';

interface ItemData {
  id: string; //Identificado
  name: string;//Nombre
  birthdate: string;//Fehca de nacimiento
  gender: string;//Genero
  email: string;//Correo electronico
  phone: string;//Telefono celular

}

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit{

  //Metodo de editar
  startEdit(): void {
  }
  //Metodo de cancelar
  cancelEdit(): void {
  }
  //Metodo de guardar
  saveEdit(): void {
  }

  updateEditCache(): void {
  }

  ngOnInit(): void {
  }
}
