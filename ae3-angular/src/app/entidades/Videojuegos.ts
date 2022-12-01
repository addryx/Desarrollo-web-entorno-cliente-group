// Clase creada para los atributos de videojuego

export class Videojuego{

    constructor(public identificador : number, public titulo : string, public compañia : string, public imagen : string, public valorMedio : number){
        this.identificador = identificador
        this.titulo = titulo
        this.compañia = compañia
        this.imagen = imagen
        this.valorMedio = valorMedio
    }

}