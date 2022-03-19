// Clase que guarda los atributos de un Heroe
export class Videojuego {
    
    private _id : number = 0;
    private static contadorId : number = 1;

    constructor(public titulo : string, public compania : string, public valoracion : number) {
        this._id = Videojuego.contadorId++;
        this.titulo = titulo;
        this.compania = compania;
        this.valoracion = valoracion;
    }

    public get id() : number {
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, Título: ${this.titulo}, Compañía: ${this.compania}, Valoración: ${this.valoracion}`
    }
}