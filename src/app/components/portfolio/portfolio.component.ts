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
   proyects:any; 
   muestra = false;
   demoMuestra = false;
  constructor(private _proyectService:ProyectsService) { 
    this.proyects = this._proyectService.proyectList;
  }

    ngOnInit(): void {
      console.log(this.proyects)
      //AnimationFadeIn
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
      
      console.log(this.demoMuestra)
  
  }
  
  openDemo(e:any){
  
    this.demoMuestra = !this.demoMuestra;
  }
}
