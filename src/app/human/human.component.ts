import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit, OnChanges {
  @Input() humanInitialPower;
  
  powerLevel = 0;
  sometext = "";
 
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
   this.powerLevel = this.humanInitialPower * 1;
   if(this.powerLevel > 100) {
     this.sometext = "Over 100!!!";
   }else {
     this.sometext = "";
   }

  }
}
