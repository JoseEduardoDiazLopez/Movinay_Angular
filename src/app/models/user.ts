export class User {
    _id?: number;
    username: string;
    password: string;
    email: string;
    RFC: string;
    nombre: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    FechaNac : string;
    constructor(username: string, password: string, email:string,RFC:string,
    nombre:string,ApellidoPaterno:string,ApellidoMaterno:string,FechaNac:string) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.RFC = RFC;
      this.nombre = nombre;
      this.ApellidoPaterno = ApellidoPaterno;
      this.ApellidoMaterno = ApellidoMaterno;
      this.FechaNac = FechaNac;
    }
  }
  