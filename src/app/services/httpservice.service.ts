import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { restApiSettings } from "./config";
import { throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getLocalToken } from './common';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  url: string;

  constructor(private http: HttpClient) { }

  getHeaders(): any {

    let body = { 'Content-Type': 'application/json' };
    
    let token = getLocalToken();

    if (token !== null) {
      body['Authorization'] = 'Bearer ' + token;
      console.log("headers ====", body);
    }

    let httpOptions = {
      headers: new HttpHeaders(body)
    };
    return httpOptions;
  }

  apiGet(path): any {
    const url = new URL(`${restApiSettings.baseURL}${path}`);

    console.log(this.getHeaders())

    return this.http.get(url.toString(), this.getHeaders())
      .pipe(tap(res => this.responseData(res)));
  }
  apiPost(path, data): any {
    const url = new URL(`${restApiSettings.baseURL}${path}`);

    return this.http.post(url.toString(), data, this.getHeaders())
      .pipe(tap(res => this.responseData(res)));
  }
  apiPut(path, data): any {
    const url = new URL(`${restApiSettings.baseURL}${path}`);

    return this.http.put(url.toString(), data, this.getHeaders())
      .pipe(tap(res => this.responseData(res)));
  }
  // apiPost(path, data): any {
  //   const url = new URL(`${restApiSettings.baseURL}${path}`);
  //   this.http.post(url.toString(), { data }, this.httpOptions)
  //     .subscribe(
  //       (data) => console.log(data),
  //       error => console.log('oops', error));
  // }
  responseData(res) {
    return res;
  }
}
