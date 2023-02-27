import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Skills } from 'src/app/models/skills';
import { AuthService } from 'src/app/services/auth.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skills: Skills[] = [];
  isLogged:boolean = false;
  constructor(private skillService:SkillsService, private authService:AuthService,private el:ElementRef ) { }
  
  ngOnInit(): void {
    this.getSkills();
    this.isLogged = this.isAuth();
  }

  ngAfterViewInit(){
    const nombreSkill =  this.el.nativeElement.querySelectorAll('#nombreSkill')
    const imgSkill =  this.el.nativeElement.querySelectorAll('#imgSkill')
    
    imgSkill.forEach((imagen:any) => {
      this.observer.observe(imagen);
    });

    nombreSkill.forEach((proyecto:any) => {
      this.observer.observe(proyecto);
    });
  }

  getSkills():void {
    this.skillService.getSkills().subscribe(data =>{
      this.skills = data;
    })
  }

  isAuth(){
     return this.authService.isAuth();
  }

  deleteSkill(id:number){
    this.skillService.deleteSkill(id).subscribe(data =>{
      alert('Skill eliminada correctamente');
      this.getSkills();
    },err=>{
      alert('Error al borrar skill');
    })
  }

  cargarImagen =  (entradas:any,observer:IntersectionObserver)=>{
    entradas.forEach((entrada:any) => {
      if(entrada.isIntersecting){
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
    rootMargin: '0px 0px 200px 0px',
    threshold: 0.9
  });
}
