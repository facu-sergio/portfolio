import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Skills } from 'src/app/models/skills';
import { AnimationService } from 'src/app/services/animation.service';
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
  constructor(private skillService:SkillsService, private authService:AuthService,private el:ElementRef,private animation:AnimationService ) { }
  
  ngOnInit(): void {
    this.getSkills();
    this.isLogged = this.isAuth();
  }

  ngAfterViewInit(){
    const nombreSkill =  this.el.nativeElement.querySelectorAll('.nombreSkill')
    const imgSkill =  this.el.nativeElement.querySelectorAll('.imgSkill')
    
    imgSkill.forEach((imagen:any) => {
      this.animation.observer.observe(imagen);
    });

    nombreSkill.forEach((nombre:any) => {
      this.animation.observer.observe(nombre);
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

}
