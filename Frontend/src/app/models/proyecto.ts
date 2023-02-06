export class Proyecto{
    Id?: number;
    Nombre?: string;
    Link?: string;
    Web?:string;
    Descripcion?: string;
    Foto?: string;
    Imagen?: string;
    Foto2?: string;
    Imagen2?:string;
    


    constructor(nombre?:string, link?:string,web?:string, descripcion?:string, foto?:string,foto2?:string,imagen?:string, imagen2?:string ){
        this.Nombre = nombre;
        this.Link = link;
        this.Web = web;
        this.Descripcion = descripcion;
        this.Foto =  foto;
        this.Foto2 = foto2;
        this.Imagen = imagen;
        this.Imagen2 = imagen2;
        
    }
}

