import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-tfour',
  templateUrl: './super-saiyan-tfour.component.html',
  styleUrls: ['./super-saiyan-tfour.component.css']
})
export class SuperSaiyanTfourComponent implements OnInit, OnChanges {

  @Input() humanInitialPower;
  
  powerLevel = 0;  
  sometext1 = "" ;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.powerLevel = this.humanInitialPower * 500;
    if(this.powerLevel >= 50000){
      this.sometext1 = "The one";
    }else{
      this.sometext1 = "";
    }

  }

}
