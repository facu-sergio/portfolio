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
    this.getProyectos();
    this.isLogged =  this.authService.isAuth();
  }
  ngAfterViewInit(){
    /*const imagen1 =  this.renderer.selectRootElement('#imagen1');
    const imagen2 =  this.renderer.selectRootElement('#imagen2');*/
    const divProyecto =  this.el.nativeElement.querySelectorAll('#datosProyecto')
    const imagenesProyecto =  this.el.nativeElement.querySelectorAll('#imagenesProyecto')

    imagenesProyecto.forEach((imagen:any) => {
      this.observer.observe(imagen);
    });

    divProyecto.forEach((proyecto:any) => {
      this.observer.observe(proyecto);
    });
    /*console.log(divProyecto)
    this.observer.observe(divProyecto);*/
  }
  getProyectos(){
    this.proyectoService.getProyectos().subscribe(data =>{
      this.proyectos = data;
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
        //entrada.target.classList.remove('invisible-izq')
        entrada.target.classList.add('visible')
      }else{
        //entrada.target.classList.add('invisible-izq')
        entrada.target.class.remove('visible')
      }
    });
  }
  observer =  new IntersectionObserver(this.cargarImagen,{
    root: null,
    rootMargin: '500px 100px 0px 0px',
    threshold: 1.0
  });
  
}
