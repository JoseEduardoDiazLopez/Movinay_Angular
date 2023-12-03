export class Tramites{
    _id?: number;
    TipoTramite: String;
    Costo: Number;
    constructor (TipoTramite: string, Costo: number){
        this.TipoTramite = TipoTramite;
        this.Costo = Costo;
    }
}