import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { setLocalToken } from 'src/app/services/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.logout()
      .subscribe(data => {

        if (data) {
          console.log(data);
          localStorage.removeItem("token");
        }

        this.router.navigate(['/login']);

      });
  }

}
