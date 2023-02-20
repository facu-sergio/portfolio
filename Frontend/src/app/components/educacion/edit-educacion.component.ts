import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formacion } from 'src/app/models/formacion';
import { FormacionService } from 'src/app/services/formacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  estudio:Formacion = null;
  constructor(private activatedRoute: ActivatedRoute,private formacionService:FormacionService,private router:Router) { }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.formacionService.getEstudio(id).subscribe(data=>{
      this.estudio = data;
      console.log(this.estudio)
    },err=>{
      console.log(err);
    })
    console.log()
  }

  onCreate(): void{
    this.formacionService.updateFormacion(this.estudio.Id,this.estudio).subscribe(data=>{
      alert("update exitoso");
      this.router.navigate(['/home']);
    },err=>{
      console.log(err);
    })
  }
}
