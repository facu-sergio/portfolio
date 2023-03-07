export class Persona{
    Id?:number;
    Dni?:number;
    Nombre?:string;
    Apellido?:string;
    Edad?:number;
    Provincia?:string;
    Localidad?:string;
    Calle?:string;
    Numero?:number;
    Telefono?:number;
    Descripcion?:string;
    Oficio?:string;
    Imagen?: string;
    Foto?:string;

    constructor(id?:number,dni?:number,nombre?:string, apellido?:string, edad?:number,provincia?:string,localidad?:string,calle?:string,numero?:number,telefono?:number,descripcion?:string,oficio?:string,imagen?:string,foto?:string){
        this.Id = id;
        this.Dni= dni;
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.Edad = edad;
        this.Provincia = provincia;
        this.Localidad = localidad;
        this.Calle = calle;
        this.Numero = numero;
        this.Telefono = telefono;
        this.Descripcion = descripcion;
        this.Oficio = oficio;
        this.Imagen = imagen;
        this.Foto = foto;
    }
}