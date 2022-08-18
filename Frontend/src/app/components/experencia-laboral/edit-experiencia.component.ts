import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperenciaService } from 'src/app/services/experencia.service';
@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})


export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private experienciaService:ExperenciaService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const  id =  this.activatedRoute.snapshot.params['id'];
    this.experienciaService.getExperiencia(id).subscribe(data =>{
      this.expLab = data;
    },err =>{
      alert('error al modificar experiencia');
      this.router.navigate(['home']);
    })
  }
  onUpdate(): void {
    const  id =  this.activatedRoute.snapshot.params['id'];
    this.experienciaService.update(id,this.expLab).subscribe( data=>{
      this.router.navigate(['home']);
    },err =>{
      alert('error al modificar experiencia');
      this.router.navigate(['home']);
    })
  }
}
