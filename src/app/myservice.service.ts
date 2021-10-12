import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  property = "original value";

  private finaldata = [];
  private apiurl = "http://localhost:5000/contactus";

  constructor(private http: HttpClient) { }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }

  getData() {
    return this.http.get(this.apiurl);
  }

}
