import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'src', 'type'];
  data: any = null;

  constructor(private service: HttpserviceService) { }

  ngOnInit(): void {
    this.service.apiGet("/images/all").pipe(finalize(() => {})).subscribe( res => {
      this.data = res;
    });
  }
}
