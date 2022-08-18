import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  isLogged:boolean = false;
  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
    
    if(this.authService.isAuth()){
      this.isLogged=true;
    }
    
  }
  
}
