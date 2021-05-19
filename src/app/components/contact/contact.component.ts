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
  
  constructor( private _buider:FormBuilder
  
  ) {
    //FormGroup Email-me
    this.mailForm = this._buider.group({
      from: ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
      
      subject: ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
      msjContent: ["",Validators.compose([Validators.required, Validators.maxLength(150)])]
      
    });
  }

  ngOnInit(): void {
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
  
  sendData(e:object):any{
  
      if (this.mailForm.valid) {
        let a = this.mailForm.value;
        let mailbody:MailInterface;
        mailbody = a;
        mailbody.to = "alianmc1988@gmail.com";
        
        //
        alert("your Messaje has being sended Succefuly")
    }
  }
  
}
