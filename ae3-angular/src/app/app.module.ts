import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormsModule } from '@angular/forms';
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuNavbarComponent,
    LoginComponent,
    ContactoComponent,
    SobreNosotrosComponent,
    UsuariosComponent,
    VideojuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Necesario para utilizar el 'Two Way Binding'.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
