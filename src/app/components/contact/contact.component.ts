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
      
      mail: ['', Validators.compose([Validators.required, Validators.email])],
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
  
  
  // Send Email from form
  sendData(e:object):any{
  
      if (this.mailForm.valid) {
        let send = document.addEventListener('submit', (e)=>{
          e.preventDefault();
          let a = this.mailForm.value;
          let mailme= document.getElementById('mail-me')
          mailme.setAttribute('href',`mailto:alianmc1988@gmail.com?subject=${a.from} ${a.mail}&body=${a.msjContent}`)
          mailme.click()
          console.log(a)
          //
          alert("your Messaje has being sended Succefuly")
        })
       
    }
  }
 
}
