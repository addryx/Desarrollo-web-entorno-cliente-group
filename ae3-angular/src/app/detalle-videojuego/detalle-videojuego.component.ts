import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css']
})
export class DetalleVideojuegoComponent implements OnInit {

  //estos son los datos que recogemos en la lista
  identificador : number = 0
  titulo : string = ""
  compania : string = ""
  imagen : string = ""
  valorMedio : number = 0

  constructor(route:ActivatedRoute) { 

    this.identificador = route.snapshot.params["videojuego.identificador"]
    this.titulo = route.snapshot.params["videojuego.titulo"]
    this.compania = route.snapshot.params["videojuego.compania"]
    this.imagen = route.snapshot.params["videojuego.imagen"]
    this.valorMedio = route.snapshot.params["videojuego.valorMedio"]

  }

  ngOnInit(): void {
  }

}
