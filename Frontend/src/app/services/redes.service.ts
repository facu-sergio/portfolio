import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Redes } from '../models/redes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  constructor(private http:HttpClient) {}

  url:string = "https://localhost:44311/api/Redes";
  //url:string = "https://facundoportafolio.bsite.net/api/Redes";
  getRed(){
    return this.http.get(this.url);
  }

  addRed(red:Redes):Observable<Redes>{
    return this.http.post<Redes>(this.url, red);
  }

  updateRed(id:number, red:Redes):Observable<Redes>{
    return this.http.put<Redes>(this.url +  `/${id}`, red);
  }

  deleteRed(id:number){
    return this.http.delete(this.url + + `/${id}`);
  }
}
