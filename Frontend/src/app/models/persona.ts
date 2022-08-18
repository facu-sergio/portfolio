export class Persona{
    dni?:number;
    nombre:string;
    apellido:string;
    edad:number;
    provincia:string;
    localidad:string;
    calle:string;
    numero:number;
    telefono:number;
    descripcion:string;
    foto:string;

    constructor(nombre:string, apellido:string, edad:number,provincia:string,localidad:string,calle:string,numero:number,telefono:number,descripcion:string,foto:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.provincia = provincia;
        this.localidad = localidad;
        this.calle = calle;
        this.numero = numero;
        this.telefono = telefono;
        this.descripcion = descripcion;
        this.foto = foto;
    }
}