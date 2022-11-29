import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidades/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios : Usuario[] = [] // Lista de usuarios vacía
  usuario : Usuario | null = null // Usuario apunta a null

  // Datos que recogemos en el formulario:
  username : string = ""
  password : string = ""

  constructor() { // Para que la lista no esté vacía, creamos en el constructor 3 usuarios (new Usuario), y lo metemos en la lista con el .push(usuario)
    let usuario : Usuario = new Usuario("user1", "1111")
    this.listaUsuarios.push(usuario);
    usuario = new Usuario("user2", "2222")
    this.listaUsuarios.push(usuario);
    usuario = new Usuario("user3", "3333")
    this.listaUsuarios.push(usuario);
  }

  ngOnInit(): void {
  }

}
