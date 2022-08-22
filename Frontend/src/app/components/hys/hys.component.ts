import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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
  constructor(private skillService:SkillsService, private authService:AuthService ) { }

  ngOnInit(): void {
    this.getSkills();
    this.isLogged = this.isAuth();
  }
  getSkills():void {
    this.skillService.getSkills().subscribe(data =>{
      this.skills = data;
      console.log(data);
    })
  }

  isAuth(){
     return this.authService.isAuth();
  }

  deleteSkill(id:number){
    this.skillService.deleteSkill(id).subscribe(data =>{
      alert('Skill eliminada correctamente');
      window.location.reload();
    },err=>{
      alert('Error al borrar skill');
    })
  }
}
