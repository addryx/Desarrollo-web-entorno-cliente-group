import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../entidades/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listaUsuarios: Usuario[] = [] // Lista de usuarios vacía
  usuario: Usuario | null = null // Usuario apunta a null

  // Datos que recogemos en el formulario:
  username : string = ""
  password: string = ""

  constructor(private router:Router) { // Para que la lista no esté vacía, creamos en el constructor 3 usuarios (new Usuario), y lo metemos en la lista con el .push(usuario)
    let usuario: Usuario = new Usuario("user1", "1111")
    this.listaUsuarios.push(usuario);
  }

  ngOnInit(): void {
  }

  public verificarUsuario(){
    for(let i = 0; i < this.listaUsuarios.length; i++){
      if(this.username === this.listaUsuarios[i].username && this.password === this.listaUsuarios[i].password) {
          this.router.navigate(['/videojuegos']);
          break
        }
      else {
        alert('Usuario no existe.')
        this.username = ""
        this.password = ""
        break
      }
    }
  }
}