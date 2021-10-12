import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { AuthService } from './services/auth.service';
import { getUser } from './services/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todaydate;

  isUserLoggedIn = false;

  constructor(private myservice: MyserviceService, private authService: AuthService) { }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();

    if (getUser())
      this.isUserLoggedIn = true;
    else
      this.isUserLoggedIn = false;

  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./app.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}