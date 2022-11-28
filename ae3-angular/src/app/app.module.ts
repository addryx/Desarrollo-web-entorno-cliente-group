import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoVideojuegosComponent } from './listado-videojuegos/listado-videojuegos.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListadoVideojuegosComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
