export class Denuncias{
    _id?: number;
    idDenuncia : Number;
    Fecha: String;
    Descripcion: string;
    TipoDenuncia: string; 
    constructor (iddenuncia: number, fecha: string, descripcion: string, tipoDenuncia: string){
        this.idDenuncia = iddenuncia;
        this.Fecha = fecha;
        this.Descripcion = descripcion;
        this.TipoDenuncia = tipoDenuncia;
    }
}