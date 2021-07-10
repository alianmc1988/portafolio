import { Component, OnInit, ViewChild } from '@angular/core';
import { state, style, trigger,transition,animation, animate } from '@angular/animations';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations:[
    trigger('show',[
      state('void',style({
      
        opacity: 0
      })),
      transition (':enter',[
        animate (1000,style({
        
          opacity:1
          
        }))
      ])
    ]),
  ]
})
export class PortfolioComponent implements OnInit {
   languaje;
   proyects:ProyectsService; 
   muestra = false;
   demoMuestra = false;
  constructor(private _proyectService:ProyectsService) { 
    this.languaje = localStorage.getItem('lang')
  }

  ngOnInit(): void {
      //Languaje Control
      
      //AnimationFadeIn
       this.animationFadeIn()
      //Proyects INIT
      this.getProyects()
  }
  
  openDemo(e:any){
    
    this.demoMuestra = !this.demoMuestra;
  }
  
  animationFadeIn(){
    window.addEventListener('scroll',()=>{
        
      let item = document.getElementById('portfolio');
      let altura = window.innerHeight/1.3;
      let distancia = item.getBoundingClientRect().top;
      
      if(distancia <= altura){
        this.muestra=true;
        
      }else{
        this.muestra=false;
      }
    })  

  }
  
  getProyects(){
    if(this.languaje == 'en'){
      this.proyects = this._proyectService.proyectListEN;
    }else{
      this.proyects = this._proyectService.proyectListES;
    }
  }
}
