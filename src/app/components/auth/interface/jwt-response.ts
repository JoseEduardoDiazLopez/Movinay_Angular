export interface JwtResponseI{
    dataUser:{
        id: number;
        rfc: string;
        name: string;
        email: string;
        accessToken: string;
        expiresIn: string;
    }

}
