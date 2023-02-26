import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experencia-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experencia-laboral/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditHysComponent } from './components/hys/edit-hys.component';
import { NewHysComponent } from './components/hys/new-hys.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent, canActivate: [AuthGuard]},
  {path:'editexp/:id', component:EditExperienciaComponent, canActivate: [AuthGuard]},
  {path:'nuevaskil', component:NewHysComponent, canActivate: [AuthGuard]},
  {path:'editskill/:id', component:EditHysComponent,  canActivate: [AuthGuard]},
  {path:'nuevoProyecto', component:NewProyectoComponent, canActivate: [AuthGuard]},
  {path:'editproyecto/:id', component:EditProyectoComponent,  canActivate: [AuthGuard]},
  {path: 'nuevaFormacion',component:NewEducacionComponent,canActivate: [AuthGuard]},
  {path:'editarFormacion/:id',component:EditEducacionComponent,canActivate:[AuthGuard]},
  {path:'editarInfoPersonal/:id',component:EditAcercaDeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
