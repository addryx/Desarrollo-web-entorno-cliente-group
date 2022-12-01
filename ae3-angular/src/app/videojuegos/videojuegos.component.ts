import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../entidades/Videojuegos';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  listaVideojuegos : Videojuego[] = [] // Lista de usuarios vacía
  videojuego : Videojuego | null = null // Usuario apunta a null

  constructor() { 
    let videojuego : Videojuego = new Videojuego( 1,"The Legend of Zelda: Breath of the Wild", "Nintendo", "", 9.8)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego( 2,"Persona 5 Royal", "ATLUS", "", 9.1)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego( 3,"Red Dead Redemption 2", "RockStar", "", 8.8)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego( 4,"Call of Duty: Modern Warfare 2", "Infinity Ward", "", 7.4)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego( 5,"Elden Ring", "FromSoftware", "", 9.4)
    this.listaVideojuegos.push(videojuego);
  }

  ngOnInit(): void {
  }

}
