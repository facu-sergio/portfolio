import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

 private observer: IntersectionObserver;

 constructor() {}

 animateFromRight(className: string) {
   const elements = document.querySelectorAll('.' + className);
   const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
          entry.target.classList.add('visible');
       }else{
        entry.target.classList.remove('visible')
        entry.target.classList.add('invisible-derecha');
       }
     });
   });

   elements.forEach(element => {
     observer.observe(element);
   });
 }
  /*
  
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
  });*/
}
