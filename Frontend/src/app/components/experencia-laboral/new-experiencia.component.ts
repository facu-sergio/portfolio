import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperenciaService } from 'src/app/services/experencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  puestoE: string = '';
  periodoE: string = '';
  descripcionE: string = '';
  constructor(private experienciaService:ExperenciaService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const experencia = new Experiencia(this.puestoE,this.periodoE,this.descripcionE);
    console.log(experencia);
    this.experienciaService.save(experencia).subscribe(
      data=>{
        alert("Experiencia añadida");
        this.router.navigate(['home']);
    },err=>{
      alert("Falló");
      this.router.navigate(['home']);
    });
  }

}
