import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  value = "This is the value related with the ts file.";
  months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  availability = false;

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
  }

  clickEvent(event): void {
    alert("button is clicked!");
    console.log(event)
  }
  onKey(event): void {

    // this.myservice.property = String(event.target.value);
    this.myservice.property = "changed value";
    console.log(event.target.value);

  }

}
