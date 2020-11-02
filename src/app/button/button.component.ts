import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
 
  constructor() { }
 
  button = false;
  ViewValue;
 
  ngOnInit(): void {
  }
 
  slide()
  {
    let value = document.getElementById("value")
    this.button = !this.button;
 
    this.ViewValue = "oui";
    if(this.button == true)
    {
      this.ViewValue = "non";
    }
 
    value.innerHTML = this.ViewValue;
    console.log(this.ViewValue);
  }
 
}