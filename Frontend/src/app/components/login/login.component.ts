import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  user:Users = new Users(this.userName,this.password);

  constructor(
    private authService:AuthService,
    private router:Router
    ) { }
  
  ngOnInit(): void {
  }

  logIn(){
    this.user.Username = this.userName;
    this.user.Password = this.password;
    console.log(this.user);
    this.authService.singin(this.user).subscribe( (res:any) =>{
      //localStorage.removeItem('token');
      localStorage.setItem('token', res);
      this.router.navigate(['home']);
    })
  }
}
