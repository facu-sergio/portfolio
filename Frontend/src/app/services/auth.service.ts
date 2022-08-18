import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'https://localhost:44311'
  constructor(
    private http:HttpClient,
    private jwtHelper:JwtHelperService,
    ) { }

  singin(user:Users){
    return this.http.post(`${this.URL}/api/Account`,user)
  }

  isAuth():boolean{
    const token  = localStorage.getItem('token');
    if( this.jwtHelper.isTokenExpired(token?.toString()) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
