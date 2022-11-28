import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  // PROPIEDADES DE LA CLASE USUARIO

  username: string
  password: string

  constructor() { 
    this.username = 'user1'
    this.password = '1234'
  }

  ngOnInit(): void {
  }

}
