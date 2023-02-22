import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  cargarImagen =  (entradas:any,observer:IntersectionObserver)=>{
    entradas.forEach((entrada:any) => {
      if(entrada.isIntersecting){
        console.log('holi')
        //entrada.target.classList.remove('invisible-izq')
        entrada.target.classList.add('visible')
      }else{
        //entrada.target.classList.add('invisible-izq')
        entrada.target.classList.remove('visible')
      }
    });
  }
  observer =  new IntersectionObserver(this.cargarImagen,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.9
  });
}
