export class Citas{
    _id?: number;
    idCita : Number;
    Fecha: String;
    Hora: string;
    numTramite: String;
    idUsuario: number;
    idOficina: number;
    constructor (idcita: number, fecha: string, hora: string, numtramite: String, idusuario: number, idoficina:number){
        this.idCita = idcita;
        this.Fecha = fecha;
        this.Hora = hora;
        this.numTramite = numtramite;
        this.idUsuario = idusuario;
        this.idOficina = idoficina;
    }
}