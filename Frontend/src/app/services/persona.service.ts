import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor( private http:HttpClient) { }

  //url:string = "https://localhost:44311/api/Persona";
  url:string = "https://facundoportafolio.bsite.net/api/Persona";

  getPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url);
  }

  addPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url, persona);
  }

  updatePersona(id:number, persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.url + `/${id}`, persona);
  }

  deletePersona(id:number){
    return this.http.delete<Persona>(this.url + `/${id}`);
  }
}
