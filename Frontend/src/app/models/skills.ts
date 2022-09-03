export class Skills {
    Id?: number;
    Skillname?: string;
    Dominio?: number;
    Foto?: string;
    Imagen?: string;

    constructor( nombre?: string, dominio?:number, foto?: string, imagen?: string) {
        this.Skillname = nombre;
        this.Dominio = dominio;
        this.Foto = foto;
        this.Imagen = imagen;
    }
}