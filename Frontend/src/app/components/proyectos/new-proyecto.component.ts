import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { FileService } from 'src/app/services/file.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP:string ;
  linkP:string;
  descripcionP:string;
  imagenP:string;
  
  selectedFile : File = null;
  url:string = "";
  constructor(private proyectoService:ProyectoService, private fileService:FileService , private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }
  onCreate(){
    const filedata = new FormData();
    filedata.append('image',this.selectedFile);
    filedata.append('nombre', this.selectedFile.name);
    const filename = filedata.get('nombre').toString();
    const proyecto =  new Proyecto(this.nombreP,this.linkP,this.descripcionP, filename);

    /*this.fileService.saveFile(filedata).subscribe(res=>{

    });*/
    this.http.post("https://facundoportafolio.bsite.net/api/File",filedata).subscribe(res=>{

  });
  this.fileService.saveFile(filedata);
    this.proyectoService.saveProyecto(proyecto).subscribe(res=>{
      alert('proyecto guardado');
      this.router.navigate(['home']);
    },err=>{
      alert('fallo');
    })
  }
  onSelectedFile(e:any){
    this.selectedFile = <File>e.target.files[0];
    if(e.target.files){
      var reader =  new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  } 
}
