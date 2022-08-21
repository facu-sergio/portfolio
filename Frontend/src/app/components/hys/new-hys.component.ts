import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {
  nombreS: string = "";
  dominioS: number;
  fotoS: string = "";
  constructor(private skillService:SkillsService, private router:Router) { }

  ngOnInit(): void {
    
  }
  onCreate(){
    this.fotoS = this.fotoS.replace(/\\/g, '/');
    var filename = this.fotoS.substring(this.fotoS.lastIndexOf('/')+1);
    console.log(filename);
    const skill =  new Skills(this.nombreS,this.dominioS,filename);
    console.log(skill);
    this.skillService.saveSkill(skill).subscribe( data => {
      alert("Skill anañadida");
      this.router.navigate(['home']);
    },err=>{
      alert("Falló");
      
    })
  }
}
