import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redes } from 'src/app/models/redes';
import { AuthService } from 'src/app/services/auth.service';
import { RedesService } from 'src/app/services/redes.service';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  datatable:any = [];
  isLogged:boolean = false;
  constructor( private redesService:RedesService, private router:Router, private authService:AuthService) {  }

  ngOnInit(): void {
    this.onDataTable();
    if(this.authService.isAuth()){
      this.isLogged=true;
    }
  }
  

  onDataTable(){
     this.redesService.getRed().subscribe(res=>{
      this.datatable = res;
      console.log(res);
     })
  }

  login(){
    this.router.navigate(['/login']);
  }

  logOut(){
    localStorage.removeItem('token');
    window.location.reload();
  }
}