import { HttpClient } from '@angular/common/http';
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
  image:any;
  selectedFile : File = null;
  constructor(private skillService:SkillsService, private router:Router , private http:HttpClient) { }

  ngOnInit(): void {
     this.http.get('https://localhost:44311/api/File').subscribe(data => {
      this.image = data;
     })
    
  }
  onCreate(){
    const filedata= new FormData();
    filedata.append('image', this.selectedFile);
    filedata.append('nombre', this.selectedFile.name);
    //console.log(filedata.get('nombre'));
    const filename = filedata.get('nombre').toString();
    const skill =  new Skills(this.nombreS,this.dominioS, filename);
    this.http.post('https://localhost:44311/api/File', filedata).subscribe(res=>{
      alert(res);
    },err=>{
      alert(err);
    })
    this.skillService.saveSkill(skill).subscribe( data => {
      alert("Skill anañadida");
      this.router.navigate(['home']);
    },err=>{
      alert("Falló");
    })
  }

  capturarFile(event:any){
    this.selectedFile = <File>event.target.files[0];
    
  }
}
