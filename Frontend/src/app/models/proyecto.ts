export class Proyecto{
    Id?: number;
    Nombre?: string;
    Link?: string;
    Descripcion?: string;
    Foto?: string;
    Imagen?: string;


    constructor(nombre?:string, link?:string, descripcion?:string, foto?:string, imagen?:string ){
        this.Nombre = nombre;
        this.Link = link;
        this.Descripcion = descripcion;
        this.Foto =  foto;
        this.Imagen = imagen;
    }
}

