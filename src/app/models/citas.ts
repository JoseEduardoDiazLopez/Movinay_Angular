export class Citas{
    _id?: number;
    idCita : number;
    Fecha: string;
    Hora: string;
    Modulo: string;
    TipoTramite: string;
    idUsuario: string;
    idOficina: number;
    constructor (idcita: number, fecha: string, hora: string, modulo: string,
        tipoTramite: string, idusuario: string, idoficina:number){
        this.idCita = idcita;
        this.Fecha = fecha;
        this.Hora = hora;
        this.Modulo = modulo;
        this.TipoTramite = tipoTramite;
        this.idUsuario = idusuario;
        this.idOficina = idoficina;
    }
}