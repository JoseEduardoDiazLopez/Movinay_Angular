export class Pago {
    idPago: number;
    idUsuario: string;
    numReferencia: string;
    Fecha: string;
    Metodos: {
      Tarjeta: {
        Concepto: string;
        Cantidad: string;
        numTarjeta: string;
        nombreTarjeta: string;
        Fecha: string;
        CVV: string;
      }
    };
  
    constructor(
      idPago: number,
      idUsuario: string,
      numReferencia: string,
      Fecha: string,
      Metodos: {
        Tarjeta: {
          Concepto: string;
          Cantidad: string;
          numTarjeta: string;
          nombreTarjeta: string;
          Fecha: string;
          CVV: string;
        }
      }
    ) {
      this.idPago = idPago;
      this.idUsuario = idUsuario;
      this.numReferencia = numReferencia;
      this.Fecha = Fecha;
      this.Metodos = Metodos;
    }
  }
  