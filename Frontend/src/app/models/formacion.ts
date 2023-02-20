export class Formacion {
    Id?:number;
    Titulo?:string; 
    Age?:number;
    Institucion?:string;
    Desc?:string;
    
    constructor(titulo?: string, age?: number,institucion?:string, desc?:string) {
        this.Titulo = titulo
        this.Age = age;
        this.Institucion = institucion;
        this.Desc = desc;
    }
}
