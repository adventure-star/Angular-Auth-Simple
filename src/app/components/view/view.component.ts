import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: string;
  data: any;

  constructor(private router: Router, private route: ActivatedRoute, private service: HttpserviceService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    // this.id = this.route.snapshot.paramMap.get('id');

    this.service.apiGet("image/" + this.id).pipe(finalize(() => { })).subscribe(res => {
      this.data = res;
      console.log(this.data)
    });

  }
  goToList() {
    this.router.navigate(['/list']);
  }

}
