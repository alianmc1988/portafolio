import { Component, OnInit } from '@angular/core';
import { state, style, trigger,transition,animation, animate } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
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
    ])   
  ]
})
export class AboutComponent implements OnInit {
  muestra=false;
  constructor() { }

  ngOnInit(): void {
  
    window.addEventListener('scroll',()=>{
        
      let item = document.getElementById('about');
      let altura = window.innerHeight/1.3;
      let distancia = item.getBoundingClientRect().top;
      
      
      if(distancia <= altura){
        this.muestra=true;
        
      }else{
        this.muestra=false;
      }
    })
  
  }

}
