import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { AuthService } from 'src/app/services/auth.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[]= [];
  isLogged:boolean = false;

  constructor(private renderer:Renderer2,private el:ElementRef, private proyectoService:ProyectoService, private authService:AuthService ) { }

  ngOnInit(): void {
    this.isLogged =  this.authService.isAuth();
    this.getProyectos();
    console.log(this.proyectos)
  }
  ngAfterViewInit(){
    const divProyecto =  this.el.nativeElement.querySelectorAll('#datosProyecto')
    const imagenesProyecto =  this.el.nativeElement.querySelectorAll('#imagenesProyecto')
    console.log(divProyecto)
    imagenesProyecto.forEach((imagen:any) => {
      this.observer.observe(imagen);
    });

    divProyecto.forEach((proyecto:any) => {
      this.observer.observe(proyecto);
    });
  }
  getProyectos(){
    this.proyectoService.getProyectos().subscribe(data =>{
      data.forEach(proyecto => {
        this.proyectos.push(proyecto)
      });
    })
  }

  deleteProject(id:number){
    this.proyectoService.deleteProyecto(id).subscribe(res=>{
      alert('proyecto eliminado')
      window.location.reload();
    },err=>{
      alert('fallo');
    })
  }
  

 cargarImagen =  (entradas:any,observer:IntersectionObserver)=>{
    entradas.forEach((entrada:any) => {
      if(entrada.isIntersecting){
        console.log('holi')
        //entrada.target.classList.remove('invisible-izq')
        entrada.target.classList.add('visible')
      }else{
        //entrada.target.classList.add('invisible-izq')
        entrada.target.classList.remove('visible')
      }
    });
  }
  observer =  new IntersectionObserver(this.cargarImagen,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.9
  });
  
}
