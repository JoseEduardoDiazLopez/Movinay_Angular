export class Denuncias{
    _id?: number;
    idDenuncia : Number;
    Fecha: String;
    Descripcion: string;
    Foto: string;
    Calles: string;
    Colonia: string; 
    Municipio: string;
    constructor (iddenuncia: number, fecha: string, descripcion: string, urlimagen: string,
        calles:string,colonia:string,municipio:string){
        this.idDenuncia = iddenuncia;
        this.Fecha = fecha;
        this.Descripcion = descripcion;
        this.Foto = urlimagen;
        this.Calles = calles;
        this.Colonia = colonia;
        this.Municipio = municipio;
    }   
}