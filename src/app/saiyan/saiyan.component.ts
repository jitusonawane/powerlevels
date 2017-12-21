import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit , OnChanges{
  @Input() humanInitialPower;

  powerLevel = 0;
  sometext = "";
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.powerLevel = this.humanInitialPower * 10;
    if(this.powerLevel > 1000) {
      this.sometext = "Over 1000!!!";
    }else {
      this.sometext = "";
    }
  } 
}

