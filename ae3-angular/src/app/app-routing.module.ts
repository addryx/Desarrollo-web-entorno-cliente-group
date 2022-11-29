import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  // Aquí dentro van a ir las rutas a seguir por las páginas y botones, no se abre un HTML nuevo para cada página,
  // se navega a través de las rutas que se incluirán aquí.
  // EJ: {path : ruta1, component : Ruta1Component}

  {path : '', component : LoginComponent},
  {path : 'contacto', component : ContactoComponent},
  {path : 'sobrenosotros', component : SobreNosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
