import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  animations: [
    trigger('enlarge', [
      state('start', style({
        height: '200px',
      })),
      state('end', style({
        height: '500px',
      })),
      transition('start => end', [
        animate('1s')
      ]),
      transition('end => start', [
        animate('0.5s')
      ])]),
  ]
})
export class ImageComponent implements OnInit {

  isEnlarge: boolean = false;
  buttonText: string = "Enlarge";

  constructor() { }

  ngOnInit(): void {
  }

  triggerAnimation() {
    this.isEnlarge = !this.isEnlarge;
    if (this.isEnlarge)
      this.buttonText = "Shrink";
    else
      this.buttonText = "Enlarge";
  }

}
