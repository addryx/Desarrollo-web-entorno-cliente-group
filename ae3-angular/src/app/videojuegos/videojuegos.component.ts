import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../entidades/Videojuegos';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  listaVideojuegos : Videojuego[] = [] // Lista de usuarios vacía
  videojuego : Videojuego | null = null // Usuario apunta a null
  username:string=''


  constructor(route : ActivatedRoute) { 
    this.username=route.snapshot.queryParams["username"]

    let videojuego : Videojuego = new Videojuego( 1,"The Legend of Zelda: Breath of the Wild", "Nintendo", "/assets/img/legend-zelda.jpg", 9.8)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego( 2,"Persona 5 Royal", "ATLUS", "/assets/img/persona-5-royal.jpg", 9.1)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego( 3,"Red Dead Redemption 2", "RockStar", "/assets/img/red-dead-redemption.jpg", 8.8)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego( 4,"Call of Duty: Modern Warfare 2", "Infinity Ward", "/assets/img/call-of-duty.jpg", 7.4)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego( 5,"Elden Ring", "FromSoftware", "/assets/img/elden-ring.jpg", 9.4)
    this.listaVideojuegos.push(videojuego);
  }

  ngOnInit(): void {
  }

}

/*
 COLECCION DE IMÁGENES

var titles=["The Legend of Zelda: Breath of the Wild", "Persona 5 Royal", "Red Dead Redemption", "Call of Duty: Modern Warfare 2", "Elden Ring"];

var imgUrl=["assets/img/legend-zelda.jpg","assets/img/persona-royal.jpg","assets/img/red-dead-redemption.jpg","assets/img/call-of-duty.jpg","assets/img/elden-ring.jpg"];

===========================================================================

import { RouterModule, Imagenes } from '@angular/router';

const routes: Routes = [];

const routes: Imagenes = [

  { path : 'assets/img/legend-zelda.jpg', //En este caso decimos el componente que mostraremos por defecto
    
  },
  { path : 'assets/img/persona-royal.jpg', //cuando definimos el 'path' no puede empezar por '/'
    
  },
  {path : 'assets/img/red-dead-redemption.jpg',
  
  
  {path : 'assets/img/call-of-duty.jpg',
  },

  {path : 'assets/img/elden-ring.jpg',
  },
]:

*/
