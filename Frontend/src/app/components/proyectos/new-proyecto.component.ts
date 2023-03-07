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
  imagenP2:string;
  web:string;
  
  selectedFile : File = null;
  selectedFile2: File = null;
  url:string = "";
  url2:string = "";
  constructor(private proyectoService:ProyectoService, private fileService:FileService , private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }
  onCreate(){
    const filedata = new FormData();
    const filedata2 =  new FormData();

    filedata.append('image',this.selectedFile);
    filedata.append('nombre', this.selectedFile.name);

    filedata2.append('image',this.selectedFile2);
    filedata2.append('nombre',this.selectedFile2.name);
    
    const filename = filedata.get('nombre').toString();
    const filename2= filedata2.get('nombre').toString();
    
    const proyecto =  new Proyecto(this.nombreP,this.linkP,this.web,this.descripcionP, filename,filename2);
  
 
this.http.post("https://localhost:44311/api/File",filedata).subscribe(res=>{

});
this.http.post("https://localhost:44311/api/File",filedata2).subscribe(res=>{

})

/*this.http.post("https://facundoportafolio.bsite.net/api/File",filedata).subscribe(res=>{

});
this.http.post("https://facundoportafolio.bsite.net/api/File",filedata2).subscribe(res=>{

})*/
  this.fileService.saveFile(filedata);
  this.proyectoService.saveProyecto(proyecto).subscribe(data=>{
      alert('proyecto guardado');
      this.router.navigate(['/']);
    },err=>{
      alert('fallo al guardar proyecto');
    })
  }
      onSelectedFile(e:any){
        console.log(<File>e.target.files[0]) 
        this.selectedFile = <File>e.target.files[0];
        if(e.target.files){
          var reader =  new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = (event: any) => {
            this.url = event.target.result;
          }
        }
      } 
      onSelectedFile2(e:any){
        console.log(<File>e.target.files[0])
        this.selectedFile2 = <File>e.target.files[0];
        if(e.target.files){
          var reader2 =  new FileReader();
          reader2.readAsDataURL(e.target.files[0]);
          reader2.onload = (event: any) => {
            this.url2 = event.target.result;
          }
        }
      } 
}
