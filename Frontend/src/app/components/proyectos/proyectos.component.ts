import { Component,ViewChildren, ElementRef, OnInit, QueryList, Renderer2, ViewChild } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { AnimationService } from 'src/app/services/animation.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @ViewChildren('datosProyecto') datosProyecto: QueryList<ElementRef>;
  proyectos: Proyecto[]= [];
  isLogged:boolean = false;

  constructor( private animation:AnimationService,private el:ElementRef, private proyectoService:ProyectoService, private authService:AuthService ) { }

  ngOnInit(): void {
    this.isLogged =  this.authService.isAuth();
    this.getProyectos();
    this.animation.animateFromRight('datosProyecto')
    this.animation.animateFromRight('imagenesProyecto')
  }
  ngAfterViewInit(){
      this.animation.animateFromRight('datosProyecto')
      this.animation.animateFromRight('imagenesProyecto')
  }

  hacerZoom(evento: MouseEvent) {
    const imagen = evento.currentTarget as HTMLElement;
    /*this.renderer.setStyle(imagen, 'transform', 'scale(1.5)');
    this.renderer.setStyle(imagen, 'opacity', '1');*/
    imagen.classList.remove('normalizarZoom')
    imagen.classList.add('zoom');
    const imagenes = this.el.nativeElement.querySelectorAll('.zoomimg');
    for (let i = 0; i < imagenes.length; i++) {
      if (imagenes[i] !== imagen) {
       /* this.renderer.setStyle(imagenes[i], 'opacity', '0');*/
       imagenes[i].classList.remove('normalizarZoom')
       imagenes[i].classList.add('ocultar');
      }
    }
  }

  restaurarImagenes() {
    const imagenes = this.el.nativeElement.querySelectorAll('.zoomimg');
    for (let i = 0; i < imagenes.length; i++) {
      /*this.renderer.setStyle(imagenes[i], 'transform', 'scale(1)');
      this.renderer.setStyle(imagenes[i], 'opacity', '1');*/
      imagenes[i].classList.remove('zoom');
      imagenes[i].classList.remove('ocultar');
      imagenes[i].classList.add('normalizarZoom')
    }
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
      alert('fallo al eliminar proyecto');
    })
  }
}
