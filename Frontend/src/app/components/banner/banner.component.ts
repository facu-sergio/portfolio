import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Redes } from 'src/app/models/redes';
import { PersonaService } from 'src/app/services/persona.service';
import { RedesService } from 'src/app/services/redes.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona:Persona[];
  redes: Redes[] = [];
  
  constructor(private personaService:PersonaService,private redesService:RedesService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{
      this.persona = data;
    })

    this.redesService.getRed().subscribe(data=>{
    this.redes = data
    })

    console.log(this.redes)
  }

}
