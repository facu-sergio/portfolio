import { Component, ElementRef, OnInit } from '@angular/core';
import { LoaderInterceptor } from 'src/app/interceptors/interceptors/http-interceptor.interceptor';
import { Persona } from 'src/app/models/persona';
import { AnimationService } from 'src/app/services/animation.service';
import { AuthService } from 'src/app/services/auth.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona:Persona[]=[];
  isLogged:boolean = false;
  constructor( private personaService:PersonaService,private authService:AuthService,private el:ElementRef,private animation:AnimationService){

  }

  ngOnInit(): void {
    this.getDatosPersonales();
    this.isLogged = this.authService.isAuth();
  }

  ngAfterViewInit(){
    this.animation.animateFromRight('imagenPersona')
    this.animation.animateFromRight('acercaDe')
  }

  getDatosPersonales(){
    this.personaService.getPersona().subscribe(data=>{
      this.persona = data;
      console.log(this.persona[0])
    },err=>{
      alert('Fallo al traer datos de persona')
    })
  }

  
}
