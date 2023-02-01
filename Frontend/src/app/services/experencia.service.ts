import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperenciaService {
 //ExpUrl = 'https://localhost:44311/api/Experiencia'
  ExpUrl = "https://facundoportafolio.bsite.net/api/Experiencia";

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.ExpUrl);
  }

  public getExperiencia(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.ExpUrl + `/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.ExpUrl,experiencia);
  }

  public update(id:number, experiencia:Experiencia): Observable<any> {
     return this.httpClient.put<any>(this.ExpUrl + `/${id}`, experiencia);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.ExpUrl +`/${id}`);
  }
}
