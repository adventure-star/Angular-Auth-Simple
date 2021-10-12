import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../../services/httpservice.service';
import {ProgressBarMode} from '@angular/material/progress-bar';
import {finalize} from 'rxjs/operators'

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'src', 'type'];

  images:any;
  videos:any;
  data: any = null;

  constructor(private service: HttpserviceService) { }

  ngOnInit(): void {
    this.data = this.service.apiGet("images/all");
    // this.videos = this.service.apiPost("image/add", {"id": 1, name: "Name"});
    this.service.apiGet("images/all").pipe(finalize(() => {})).subscribe( res => {
      this.data = res;
    });
  }

}
