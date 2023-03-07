import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { FileService } from 'src/app/services/file.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona:Persona[]=[];
  filename:string = "";
  fullpath:string  = "";
  file:File;
  photoSelected: string | ArrayBuffer;
  constructor(private personaService:PersonaService,private router:Router,private fileService:FileService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{
      this.persona = data;
      console.log(this.persona[0].Id)
    })
  }

  updateInfo(){
    if(this.file){
      const filedata = new FormData();
      filedata.append('image', this.file);
      filedata.append('nombre', this.file.name);

      this.fileService.saveFile(filedata).subscribe(res=>{ 
      });
      
      this.fullpath = `../assets/` + this.file.name;
      this.fullpath= this.fullpath.substring(this.fullpath.lastIndexOf('/')+1);
      //console.log(this.fullpath);
      this.persona[0].Foto = this.fullpath;
    }else{
      this.fullpath = `../assets/` + this.persona[0].Foto;
      this.persona[0].Foto = this.fullpath;
      this.persona[0].Foto = this.persona[0].Foto.replace(/\\/g, '/');
      this.persona[0].Foto = this.persona[0].Foto.substring(this.persona[0].Foto.lastIndexOf('/')+1);
    }
    this.personaService.updatePersona(this.persona[0].Id,this.persona[0]).subscribe(data=>{
      alert('Datos pesonales actualizados correctamente'),
      this.router.navigate(['/']);
    },err=>{
      alert('fallo al actualizar datos personales')
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
