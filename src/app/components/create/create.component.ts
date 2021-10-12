import { Component, OnInit } from '@angular/core';
import { Entry } from '../../interfaces/entry';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title: string = "This is create page!!!!!";
  color: string;
  listcolor: any = {'color': 'blue'};
  user:any;
  childname: string = "Ryan";

  state: boolean = false;

  entry: Entry;

  studentArr: any[] = [{
    "id": 1,
    "name": "student1"
  },
  {
    "id": 2,
    "name": "student2"
  },
  {
    "id": 3, "name": "student3"
  },
  {
    "id": 4,
    "name": "student4"
  }
  ];
  trackByData(index: number, studentArr: any): number {
    return studentArr.id;
  }
  
  present = new Date();

  count = 1000;

  constructor() { }

  ngOnInit(): void {
    this.color = "red";
    this.entry = {
      id: 1,
      item: 'pizza',
      amount: 100
    }
  }

  showTitle($event: any): void {
    console.log($event.target);
    this.state = true;
  }
  changeTitle($event: any): void {
    console.log($event.target.value);
  }

}
