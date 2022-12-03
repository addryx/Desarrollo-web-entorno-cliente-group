import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { LoginComponent } from './login/login.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

const routes: Routes = [
  // Aquí dentro van a ir las rutas a seguir por las páginas y botones, no se abre un HTML nuevo para cada página,
  // se navega a través de las rutas que se incluirán aquí.
  // EJ: {path : ruta1, component : Ruta1Component}

  {path : 'inicio', component : LoginComponent},
  {path : 'videojuegos', component : VideojuegosComponent},
  {path : 'detallevj', component : DetalleVideojuegoComponent},
  {path : 'contacto', component : ContactoComponent},
  {path : 'sobrenosotros', component : SobreNosotrosComponent},

  {path : 'detallevj/:videojuego.identificador/:videojuego.titulo/:videojuego.compania/:videojuego.imagen/:videojuego.valorMedio', component : DetalleVideojuegoComponent},
  {path : 'inicio/:usuario.username', component : VideojuegosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
