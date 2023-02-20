import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/models/formacion';
import { FormacionService } from 'src/app/services/formacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  titulo:string="";
  age:number=0;
  institucion:string="";
  desc:string="";
  constructor(private formacionService:FormacionService,private router:Router) { }

  ngOnInit(): void {
  }
  onCreate(){
    const estudio = new Formacion(this.titulo,this.age,this.institucion,this.desc);
    console.log(estudio)
    this.formacionService.addFormacion(estudio).subscribe(data=>{
      alert('Estudio guardado');
      this.router.navigate(['home']);
    },err=>{
      alert('fallo')
    })
  }
}
