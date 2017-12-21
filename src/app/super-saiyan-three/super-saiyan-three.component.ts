import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit, OnChanges {
  @Input() humanInitialPower;
  
  powerLevel = 0;  
  sometext1 = "" ;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.powerLevel = this.humanInitialPower * 250;
    if(this.powerLevel > 20000){
      this.sometext1 = "Superlative!";
    }else{
      this.sometext1 = "";
    }
  }
}
