import { Component, ElementRef, OnInit } from '@angular/core';
import { Formacion } from 'src/app/models/formacion';
import { AnimationService } from 'src/app/services/animation.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormacionService } from 'src/app/services/formacion.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  isLogged:boolean = false;
  estudios:Formacion[];
  constructor(private authService:AuthService,private formacionService:FormacionService,private el:ElementRef,private animation:AnimationService ) { }

  ngOnInit(): void {
    this.getEstudios();
  }

  ngAfterViewInit(){
    let iconoEstudio = this.el.nativeElement.querySelectorAll('#iconoEstudio');
    let estudios = this.el.nativeElement.querySelectorAll('#estudio');

    iconoEstudio.forEach((icono:any) => {
      this.animation.observer.observe(icono);      
    });

    estudios.forEach((estudio:any) => {
      this.animation.observer.observe(estudio);      
    });
  }

  getEstudios(){
    this.formacionService.getFormacion().subscribe(data=>{
      this.estudios=data;
    },err=>{
      alert('fallo al traer estudios')
    })
    if(this.authService.isAuth()){
      this.isLogged=true;
    }
  }
  
  deleteEstudio(id:number){
    this.formacionService.deleteFormacion(id).subscribe(data=>{
      alert('Estudio eliminado correctamente');
      this.getEstudios();
    },err=>{
      alert('fallo al eliminar estudio');
    })
  }
  
}
