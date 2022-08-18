import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  datatable:any = [];

  constructor(private personaService:PersonaService){

  }

  ngOnInit(): void {
    this.onDataTable();
  }

  onDataTable(){
    this.personaService .getPersona().subscribe(res => {
      this.datatable = res;
      console.log(res);
    })
  }

}
