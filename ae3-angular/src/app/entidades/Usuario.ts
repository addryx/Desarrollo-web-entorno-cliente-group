// Clase creada para los atributos de usuario

export class Usuario{

    constructor(public username : string, public password : string){
        this.username = username;
        this.password = password;
    }

    public toString() : string {
        return `Username: ${this.username}, Password: ${this.password}`
    }

}