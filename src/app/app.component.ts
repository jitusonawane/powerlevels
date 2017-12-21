import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  initialPower = 0;

  calculate(){
    let ele = document.getElementById("initialPower");
    console.log("Calculating Power");
    this.initialPower = ele.value;
  }
  
}
