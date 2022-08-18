export class Experiencia {
    Id?: number;
    Puesto?: string;
    Periodo?: string;
    Desc?:string;
    
    constructor(puesto?: string, periodo?: string, descripcion?:string) {
        
        this.Puesto = puesto;
        this.Periodo = periodo;
        this.Desc = descripcion;
    }
}
