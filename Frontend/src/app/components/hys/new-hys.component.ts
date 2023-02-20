import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { FileService } from 'src/app/services/file.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {
  nombreS: string = "";
  dominioS: number;
  selectedFile : File = null;
  url:string = "";
  tipo:string = "";
  constructor(private skillService:SkillsService, private fileService:FileService , private router:Router , private http:HttpClient) { }

  ngOnInit(): void {
  }
  onCreate(){
    const filedata= new FormData();
    filedata.append('image', this.selectedFile);
    filedata.append('nombre', this.selectedFile.name);
    const filename = filedata.get('nombre').toString();
    const skill =  new Skills(this.nombreS,this.dominioS,this.tipo,filename);
    this.http.post("https://facundoportafolio.bsite.net/api/File",filedata).subscribe(res=>{

    });
    /*this.http.post("https://localhost:44311/api/File",filedata).subscribe(res=>{

    });*/
    this.fileService.saveFile(filedata);
    
    this.skillService.saveSkill(skill).subscribe( data => {
      alert("Skill anañadida");
      this.router.navigate(['home']);
    },err=>{
      alert("Falló");
    })
  }
  
  onSelectedFile(e:any){
    this.selectedFile = <File>e.target.files[0];
    if (e.target.files){
      var reader =  new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any)=> {
        console.log(event.target.result);
        this.url = event.target.result;
      }
    }
    
  }
}
