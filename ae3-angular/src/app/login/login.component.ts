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

  constructor(private router:Router) {// Para que la lista no esté vacía, creamos en el constructor 3 usuarios (new Usuario), y lo metemos en la lista con el .push(usuario)
    let usuario: Usuario = new Usuario("user1", "1111")
    this.listaUsuarios.push(usuario);
  }

  ngOnInit(): void {
  }
/*
Este método comprueba si el usuario y la contraseña están registrados. 

Si el usuario introducido es estrictamente igual a algún usuario de los que están registrados y la contraseña introducida es correcta,
permite el acceso. 

En caso de que alguno de los datos introducidos sea erróneo no permite el acceso y muestra el mensaje alert. 
*/
  public verificarUsuario(){
    for(let i = 0; i < this.listaUsuarios.length; i++){
      if(this.username === this.listaUsuarios[i].username && this.password === this.listaUsuarios[i].password) {
          this.router.navigate(['/videojuegos', this.username]);
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

  /*
 public routing() {
   this.router.navigate([ '/videojuegos', this.username, this.password])
 }
 */
}