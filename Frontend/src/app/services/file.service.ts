import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  //fileUrl = "https://facundoportafolio.bsite.net/api/File";
  fileUrl:string = "https://localhost:44311/api/File";

  constructor(private htppClient:HttpClient) { }

  public saveFile(file:FormData): Observable<any>{
    return this.htppClient.post(this.fileUrl,file);
  }

}
