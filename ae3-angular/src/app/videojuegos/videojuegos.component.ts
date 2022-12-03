import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from '../entidades/Videojuegos';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  listaVideojuegos : Videojuego[] = [] // Lista de videojuegos vacía
  videojuego : Videojuego | null = null // Videojuego apunta a null

  constructor(route:ActivatedRoute) { 
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