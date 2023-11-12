export class Citas{
    _id?: number;
    idCita : number;
    Fecha: string;
    Hora: string;
    Modulo: string;
    TipoTramite: string;
    idUsuario: string;
    EstadoCita: string;
    constructor (idcita: number, fecha: string, hora: string, modulo: string,
        tipoTramite: string, idusuario: string, estadocita:string){
        this.idCita = idcita;
        this.Fecha = fecha;
        this.Hora = hora;
        this.Modulo = modulo;
        this.TipoTramite = tipoTramite;
        this.idUsuario = idusuario;
        this.EstadoCita= estadocita;
    }
}