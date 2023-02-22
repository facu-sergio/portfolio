import { Component, ElementRef, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { AnimationService } from 'src/app/services/animation.service';
import { AuthService } from 'src/app/services/auth.service';
import { ExperenciaService } from 'src/app/services/experencia.service';

@Component({
  selector: 'app-experencia-laboral',
  templateUrl: './experencia-laboral.component.html',
  styleUrls: ['./experencia-laboral.component.css']
})
export class ExperenciaLaboralComponent implements OnInit {
  experiencia: Experiencia[] = [];
  constructor(private experienciaService: ExperenciaService, private authService: AuthService,private el:ElementRef, private animation:AnimationService) { }


  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencias();
    if (this.authService.isAuth()) {
      this.isLogged = true;
    }
  }
  ngAfterViewInit(){
    let iconos =  this.el.nativeElement.querySelectorAll('#icono');
    let experencias =  this.el.nativeElement.querySelectorAll('#experiencia');

    iconos.forEach((icono:any) => {
      this.animation.observer.observe(icono);
    });

    experencias.forEach((experencia:any) => {
      this.animation.observer.observe(experencia);
    });
  }
  cargarExperiencias(): void {
    this.experienciaService.lista().subscribe(
      data => { this.experiencia = data;
        console.log(data); }
    )
  }

  eliminarExp( id?: number){
     if(id != undefined){
      this.experienciaService.delete(id).subscribe(data =>{
        this.cargarExperiencias();
      },err =>{
        alert("No se pudo borrar la experiencia");
      })
     }
     console.log(id);
     
  }
}
