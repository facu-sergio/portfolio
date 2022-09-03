import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditExperienciaComponent } from './components/experencia-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experencia-laboral/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditHysComponent } from './components/hys/edit-hys.component';
import { NewHysComponent } from './components/hys/new-hys.component';
import { LoginComponent } from './components/login/login.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent, canActivate: [AuthGuard]},
  {path:'editexp/:id', component:EditExperienciaComponent, canActivate: [AuthGuard]},
  {path:'nuevaskil', component:NewHysComponent, canActivate: [AuthGuard]},
  {path:'editskill/:id', component:EditHysComponent,  canActivate: [AuthGuard]},
  {path:'nuevoProyecto', component:NewProyectoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
