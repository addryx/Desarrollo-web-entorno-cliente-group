// Clase creada para los atributos de videojuego

export class Videojuego{

    constructor(public identificador : number, public titulo : string, public compania : string, public imagen : string, public valorMedio : number){
        this.identificador = identificador
        this.titulo = titulo
        this.compania = compania
        this.imagen = imagen
        this.valorMedio = valorMedio
    }

}