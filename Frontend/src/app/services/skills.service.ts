import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skillUrl:string = "https://localhost:44311/api/Skills";
  fileUrl:string = "https://localhost:44311/api/File";
  constructor(private httpClient:HttpClient) { }
  
  public getSkills() : Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.skillUrl);
  }

  public getSkill(id:number) : Observable<Skills>{
    return this.httpClient.get<Skills>(this.skillUrl + `/${id}`);
  }

  public saveSkill(skill:Skills) :  Observable<any>{
    return this.httpClient.post<any>(this.skillUrl, skill );
  }

  public updateSkill(id:number, skill:Skills) : Observable<any>{
    return this.httpClient.put<any>(this.skillUrl + `/${id}`, skill);
  }

  public deleteSkill(id:number) : Observable<any>{
    return this.httpClient.delete<any>(this.skillUrl + `/${id}`);
  }
}
