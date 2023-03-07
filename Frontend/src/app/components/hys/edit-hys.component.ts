import { HttpClient } from '@angular/common/http';
import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { Skills } from 'src/app/models/skills';
import { FileService } from 'src/app/services/file.service';
import { SkillsService } from 'src/app/services/skills.service';



@Component({
  selector: 'app-edit-hys',
  
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit {
  skill: Skills = null;
  filename:string = "";
  fullpath:string  = "";
  file:File;
  photoSelected: string | ArrayBuffer;
  constructor(private skillService: SkillsService, private activatedRoute: ActivatedRoute, private router: Router, private fileService: FileService) { }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.getSkill(id).subscribe(data =>{
      this.skill = data;
    })
  }
  updateSkill(){
    if(this.file){
      const filedata = new FormData();
      filedata.append('image', this.file);
      filedata.append('nombre', this.file.name);

      this.fileService.saveFile(filedata).subscribe(res=>{ 
      });
      
      this.fullpath = `../assets/` + this.file.name;
      this.fullpath= this.fullpath.substring(this.fullpath.lastIndexOf('/')+1);
      console.log(this.fullpath);
      this.skill.Foto = this.fullpath;
    }else{
      this.fullpath = `../assets/` + this.skill.Foto;
      this.skill.Foto = this.fullpath;
      this.skill.Foto = this.skill.Foto.replace(/\\/g, '/');
      this.skill.Foto = this.skill.Foto.substring(this.skill.Foto.lastIndexOf('/')+1);
    }
    
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.updateSkill(id, this.skill).subscribe(data =>{
      alert('Skill actualizada');
      this.router.navigate(['/']);
    }, err=>{
      alert('Error');
      this.router.navigate(['/']);
    })
  }
  onPhotoSelected(event:any): void{
    if (event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      var reader =  new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      console.log(this.photoSelected)
      reader.readAsDataURL(this.file);
    }
  }
}
