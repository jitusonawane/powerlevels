import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css']
})
export class SuperSaiyanTwoComponent implements OnInit , OnChanges{
  @Input() humanInitialPower;
  
  powerLevel = 0;  
  sometext1 = "" ;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

    this.powerLevel = this.humanInitialPower * 150;
    if(this.powerLevel > 9000){ 
      this.sometext1 = "Over 9000!!";
    }else{
      this.sometext1 = "";
    }
  }
}
