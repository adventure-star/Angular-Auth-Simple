import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  constructor() { }

  numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  ngOnInit(): void {
  }

}
