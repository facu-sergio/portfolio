import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  cargarImagen =  (entradas:any,observer:IntersectionObserver)=>{
    entradas.forEach((entrada:any) => {
      if(entrada.isIntersecting){
        setTimeout(() => {
          entrada.target.classList.add('visible');
        }, 170); 
      }else{

        entrada.target.classList.remove('visible')
      }
    });
  }
  observer =  new IntersectionObserver(this.cargarImagen,{
    rootMargin: '50px',
    threshold: 0.75
  });
}
