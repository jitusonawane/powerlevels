import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit, OnChanges {
  @Input() humanInitialPower;
  
    powerLevel = 0;
    sometext = "";

  constructor() { }

  ngOnInit() {
  }
    ngOnChanges() {
      this.powerLevel = this.humanInitialPower * 90;
      if(this.powerLevel > 5000) {
        this.sometext = "Super sayin  !!!";
      }else {
        this.sometext = "";
      }
  }

  }
