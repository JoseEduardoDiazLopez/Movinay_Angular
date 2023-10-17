export class Denuncias{
    _id?: number;
    descripcion: string;
    tipoDenuncia: string; 
    constructor (descripcion: string, tipoDenuncia: string){
        this.descripcion = descripcion;
        this.tipoDenuncia = tipoDenuncia;
    }
}