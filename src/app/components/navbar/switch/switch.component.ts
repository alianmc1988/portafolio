import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  languaje;
  constructor(private _router:Router) { 
    
  }

  ngOnInit(): void {
    this.languaje = localStorage.getItem("lang")
  }
  
  changeLanguaje() {
    if (localStorage.getItem('lang')=='en'){
      localStorage.removeItem('lang');
      localStorage.setItem('lang','es')
    }else{
    localStorage.removeItem('lang')
    localStorage.setItem('lang','en')
    }
    this.languaje =localStorage.getItem('lang')
    
  }
}
