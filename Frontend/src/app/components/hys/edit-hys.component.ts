import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-edit-hys',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit {
  skill: Skills = null;
  filename:string = "";
  fullpath:string  = "";
  constructor(private skillService:SkillsService, private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.getSkill(id).subscribe(data =>{
      this.skill = data;
    })
  }
  updateSkill(){
    this.skill.Foto = this.skill.Foto.replace(/\\/g, '/');
    this.filename = this.skill.Foto.substring(this.skill.Foto.lastIndexOf('/')+1);
    this.fullpath = `../assets/` + this.filename;
    this.skill.Foto = this.fullpath;
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.updateSkill(id, this.skill).subscribe(data =>{
      alert('Skill actualizada');
      this.router.navigate(['/home']);
    }, err=>{
      alert('Error');
      this.router.navigate(['/home']);
    })
    
  }
}
