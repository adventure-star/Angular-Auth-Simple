import { Injectable } from '@angular/core';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private service: HttpserviceService) { }

  login(email: string, password: string): any {

    const body = {};
    body['email'] = email;
    body['password'] = password;

    const res = this.service.apiPost("/login", JSON.stringify(body));

    return res;
  }
  register(name: string, email: string, password: string): any {

    const body = {};
    body["name"] = name;
    body["email"] = email;
    body["password"] = password;
    body["password_confirmation"] = password;

    return this.service.apiPost("/register", JSON.stringify(body));
  }
  logout(): any {
    this.isLoggedIn = false;

    return this.service.apiGet("/logout");
  }
}
