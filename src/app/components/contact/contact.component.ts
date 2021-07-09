import { Component, OnInit } from '@angular/core';
import { state, style, trigger,transition,animation, animate } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MailInterface} from '../../interfaces/mailStructure.interfaces'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
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
export class ContactComponent implements OnInit {
  muestra=false; //Triguer for animations
  mailForm:FormGroup;
  languaje;
  constructor( private _buider:FormBuilder
 
  ) {
    //FormGroup Email-me
    this.mailForm = this._buider.group({
      from: ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
      
      mail: ['', Validators.compose([Validators.required, Validators.email])],
      msjContent: ["",Validators.compose([Validators.required, Validators.maxLength(150)])]
      
    });
  }

  ngOnInit(): void {
  
  this.languaje = localStorage.getItem('lang')
    //Animations
    
    //FadeIn on scroll
    window.addEventListener('scroll',()=>{
        
      let item = document.getElementById('contact');
      let altura = window.innerHeight/1.3;
      let distancia = item.getBoundingClientRect().top;
      
      
      if(distancia <= altura){
        this.muestra=true;
        
      }else{
        this.muestra=false;
      }
    }) //End FadeIn
    
    //End Animations   
  
  }
  
  
 
}
