import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { AuthService } from 'src/app/services/auth.service';
import { ExperenciaService } from 'src/app/services/experencia.service';

@Component({
  selector: 'app-experencia-laboral',
  templateUrl: './experencia-laboral.component.html',
  styleUrls: ['./experencia-laboral.component.css']
})
export class ExperenciaLaboralComponent implements OnInit {
  experiencia: Experiencia[] = [];
  constructor(private experienciaService: ExperenciaService, private authService: AuthService) { }


  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencias();
    if (this.authService.isAuth()) {
      this.isLogged = true;
    }
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
