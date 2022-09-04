import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperenciaLaboralComponent } from './components/experencia-laboral/experencia-laboral.component';
import { HysComponent } from './components/hys/hys.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';



import { JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import { LoginComponent } from './components/login/login.component'

import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NewExperienciaComponent } from './components/experencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './components/experencia-laboral/edit-experiencia.component';
import { NewHysComponent } from './components/hys/new-hys.component';
import { EditHysComponent } from './components/hys/edit-hys.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperenciaLaboralComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewHysComponent,
    EditHysComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //jwt
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    //token interceptor
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
