export class Skills {
    Id?: number;
    Skillname?: string;
    Dominio?: number;
    Foto?: string;
    Imagen?: string;
    Tipo?:string;

    constructor( nombre?: string, dominio?:number,tipo?:string, foto?: string, imagen?: string) {
        this.Skillname = nombre;
        this.Dominio = dominio;
        this.Tipo = tipo;
        this.Foto = foto;
        this.Imagen = imagen;
    }
}