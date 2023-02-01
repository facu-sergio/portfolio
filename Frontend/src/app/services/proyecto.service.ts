import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {
   //proyectoUrl:string = "https://localhost:44311/api/Proyectos";
  proyectoUrl:string = "https://facundoportafolio.bsite.net/api/Proyectos";
  constructor(private httpClient:HttpClient) { }

  public getProyectos(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyectoUrl);
  }

  public getProyecto(id:number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proyectoUrl + `/${id}`);
  }

  public saveProyecto(proyecto:Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.proyectoUrl, proyecto);
  }

  public updateProyecto(id:number, proyecto:Proyecto) : Observable<any>{
    return this.httpClient.put<any>(this.proyectoUrl + `/${id}` , proyecto);
  }

  public deleteProyecto(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.proyectoUrl + `/${id}`);
  }

}
