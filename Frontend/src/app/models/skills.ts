export class Skills {
    Id?: number;
    Skillname?: string;
    Dominio?: number;
    Foto?: string;

    constructor( nombre?: string, dominio?:number, foto?: string) {
        this.Skillname = nombre;
        this.Dominio = dominio;
        this.Foto = foto;
    }
}