import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {

  prime10000;

  constructor() { }

  ngOnInit(): void {
  }

  find10000thPrimeNumber() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('../../app.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        this.prime10000 = data;
      };
      worker.postMessage(10000);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}
