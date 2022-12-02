import { Component, OnInit } from '@angular/core';
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
  username: string = ""
  password: string = ""

  constructor() { // Para que la lista no esté vacía, creamos en el constructor 3 usuarios (new Usuario), y lo metemos en la lista con el .push(usuario)
    let usuario: Usuario = new Usuario("user1", "1111")
    this.listaUsuarios.push(usuario);
    usuario = new Usuario("user2", "2222")
    this.listaUsuarios.push(usuario);
    usuario = new Usuario("user3", "3333")
    this.listaUsuarios.push(usuario);
  }

  ngOnInit(): void {
  }
  /*
//Creamos un metodo y le pasamos el NgForm y creamos las constantes con los name del formulario
  login(form:NgForm){

    //Con esto rescatamos lo que viene en los campos del formulario
    const username=form.value.username

    const password=form.value.password

  }
  */

  public verificarUsuario(){
    for(let i = 0; i < this.listaUsuarios.length; i++){
      if(this.username === this.listaUsuarios[i].username && this.password === this.listaUsuarios[i].password) {
          alert("EXISTE")
          break
        }
      else {
        alert('Usuario no existe.')
        break
      }
    }
  }
}
