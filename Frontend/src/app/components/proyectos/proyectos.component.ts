import { Component, OnInit } from '@angular/core';
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
  constructor(private proyectoService:ProyectoService, private authService:AuthService ) { }

  ngOnInit(): void {
    this.getProyectos();
    this.isLogged =  this.authService.isAuth();
  }
  getProyectos(){
    this.proyectoService.getProyectos().subscribe(data =>{
      this.proyectos = data;
      console.log(this.proyectos);
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
}
