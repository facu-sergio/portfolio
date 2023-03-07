import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { Skills } from 'src/app/models/skills';
import { FileService } from 'src/app/services/file.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;
  fullpath: string = "";
  fullpath2:string = "";
  selectedFile: File = null;
  selectedFile2: File = null;
  photoSelected: string | ArrayBuffer;
  photoSelected2: string | ArrayBuffer;
  id = this.activatedRoute.snapshot.params['id'];
  constructor(private proyectoService: ProyectoService, private activatedRoute: ActivatedRoute, private fileService: FileService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.getProyecto(this.id).subscribe(data => {
      this.proyecto = data;
      console.log(this.proyecto)
    })
  }

  updateProject() {
    if (this.selectedFile) {
      const filedata = new FormData();
      filedata.append('image', this.selectedFile);
      filedata.append('nombre', this.selectedFile.name);

      this.fileService.saveFile(filedata).subscribe(res => {

      });
      //formateo de ruta de la imagen nueva para enviar a sv
      this.fullpath = `../assets/` + this.selectedFile.name;
      this.fullpath = this.fullpath.substring(this.fullpath.lastIndexOf('/') + 1);
      this.proyecto.Foto = this.fullpath;
    } else {
      //formateo de ruta de la imagen ya existente para enviar a sv
      this.fullpath = `../assets/` + this.proyecto.Foto;
      this.proyecto.Foto = this.fullpath;
      this.proyecto.Foto = this.proyecto.Foto.replace(/\\/g, '/');
      this.proyecto.Foto = this.proyecto.Foto.substring(this.proyecto.Foto.lastIndexOf('/') + 1);

      
    }
    if(this.selectedFile2){
      this.fullpath2 = `../assets/` + this.selectedFile2.name;
      this.fullpath2 = this.fullpath2.substring(this.fullpath2.lastIndexOf('/') + 1);
      this.proyecto.Foto2 = this.fullpath2;
    }else{
      this.fullpath2 = `../assets/` + this.proyecto.Foto2;
      this.proyecto.Foto2 = this.fullpath2;
      this.proyecto.Foto2 = this.proyecto.Foto2.replace(/\\/g, '/');
      this.proyecto.Foto2 = this.proyecto.Foto2.substring(this.proyecto.Foto2.lastIndexOf('/') + 1);
    }

    this.proyectoService.updateProyecto(this.id, this.proyecto).subscribe(res => {
      alert('Proyecto Actualizado');
      this.router.navigate(['/home']);
    }, err => {
      alert('fallo al actualizar proyecto');
      this.router.navigate(['/home']);
    })
  }
  onSelectedFile(e: any) {
    this.selectedFile = <File>e.target.files[0];
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.photoSelected = event.target.result;
      }
    }
  }

  onSelectedFile2(e: any) {
    this.selectedFile2 = <File>e.target.files[0];
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.photoSelected2 = event.target.result;
      }
    }
  }

}
