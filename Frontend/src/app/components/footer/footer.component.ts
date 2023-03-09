import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit { 
  isLogged:boolean = false;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.isLogged =  this.authService.isAuth();
  }
  login(){
    this.router.navigate(['/login']);
  }

  logOut(){
    localStorage.removeItem('token');
    window.location.reload();
  }
}
