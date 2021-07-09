import { state, style, trigger,transition,animation, animate } from '@angular/animations';

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
  animations:[
    trigger('initState',[
      state('void',style({
        transform:'translateX(-200%)',
        opacity: 0
      })),
      transition (':enter',[
        animate (1000,style({
         transform: 'translateX(0)',
          opacity:1
          
        }))
      ])
    ]),
    trigger('initStateBrand',[
      state('void',style({        
        opacity: 0
      })),
      transition (':enter',[
        animate (1500,style({
          opacity:1
          
        }))
      ])
    ])
  ]
})
export class LandingpageComponent implements OnInit {
  languaje; 
  
  constructor() {
    if(localStorage.getItem('lang')==null){
      localStorage.setItem('lang','en')
      
    }
  
  }

  ngOnInit(): void {
    this.languaje = localStorage.getItem('lang')
  }
}
