import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  languaje;
  constructor() { }

  ngOnInit(): void {
    this.languaje = localStorage.getItem('lang')
  }

}
