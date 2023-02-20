import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formacion } from '../models/formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  constructor(private http:HttpClient) { }

  //urlFormacion:string = "https://localhost:44311/api/Formacion";
  urlFormacion:string ="https://facundoportafolio.bsite.net/api/Formacion";
  public getFormacion():Observable<Formacion[]>{
    return this.http.get<Formacion[]>(this.urlFormacion);
  }

  public getEstudio(id:number):Observable<Formacion>{
    return this.http.get<Formacion>(this.urlFormacion + `/${id}`);
  }

  public addFormacion(formacion:Formacion):Observable<Formacion>{
    return this.http.post<Formacion>(this.urlFormacion,formacion);
  }

  public updateFormacion(id:number,formacion:Formacion) : Observable<any>{
    return this.http.put<any>(this.urlFormacion+ `/${id}`  ,formacion)
  }
  
  public deleteFormacion(id:number): Observable<any>{
    return this.http.delete<any>(this.urlFormacion+ `/${id}`);
  }
}
