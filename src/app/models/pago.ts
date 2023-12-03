export class Pago {
    idPago?: number;
    idUsuario: string;
    TipoPago: string;
    Fecha?: string;
    Concepto: string;
    Cantidad: string;
    numTarjeta: string;
    nombreTarjeta: string;
    FechaTarjeta: string;
    CVV: string;
    constructor(
      idPago: number,
      idUsuario: string,
      TipoPago: string,
      Fecha: string,
      Concepto: string,
      Cantidad: string,
      numTarjeta: string,
      nombreTarjeta: string,
      FechaTarjeta: string,
      CVV: string
    ){
      this.idPago = idPago;
      this.idUsuario = idUsuario;
      this.TipoPago = TipoPago;
      this.Fecha = Fecha;
      this.Concepto = Concepto;
      this.Cantidad = Cantidad
      this.numTarjeta = numTarjeta;
      this.nombreTarjeta = nombreTarjeta;
      this.FechaTarjeta = FechaTarjeta;
      this.CVV = CVV;
    }
  }
  