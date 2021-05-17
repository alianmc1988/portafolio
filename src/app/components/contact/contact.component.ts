import { Component, OnInit } from '@angular/core';
import { state, style, trigger,transition,animation, animate } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    this.mailForm = this._buider.group({
      mail: ['',Validators.compose([Validators.email, Validators.required])] ,
      topic: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])],
      contentMsj: ["",Validators.compose([Validators.required, Validators.maxLength(150)])]
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
  
  sendData(mailForm_values){
    console.log(mailForm_values)
    alert("Messaje sended Succefuly")
    
  }
}
