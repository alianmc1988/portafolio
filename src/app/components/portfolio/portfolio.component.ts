import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
   proyects = [{},{},{}];
   visible = true;
  constructor() { 
  }

  ngOnInit(): void {
  }
}
