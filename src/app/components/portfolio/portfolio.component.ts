import { Component, OnInit, ViewChild } from '@angular/core';
import { state, style, trigger,transition,animation, animate } from '@angular/animations';

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
    // trigger('initStateBrand',[
    //   state('void',style({
    //     // transform:'translateX(20%)',
        
    //     opacity: 0
    //   })),
    //   transition (':enter',[
    //     animate (1500,style({
    //       // transform: 'translateX(0)',
    //       opacity:1
          
    //     }))
    //   ])
    // ])
  ]
})
export class PortfolioComponent implements OnInit {
   proyects = [{},{},{}];
   muestra = false;
   demoMuestra = true;
  constructor() { 
  
  }

    ngOnInit(): void {
      
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
  
  openDemo(e){
  
    console.log(e);
  }
}
