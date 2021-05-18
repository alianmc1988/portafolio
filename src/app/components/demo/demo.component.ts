import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Output() closeView = new EventEmitter<boolean>()
  constructor(
    
  ) { }

  ngOnInit(): void {
  
  }
  closeDemo(e:Event){
  
    
    this.closeView.emit(false)
    console.log(this.closeView)
  }
}
