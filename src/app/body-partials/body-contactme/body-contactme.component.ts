import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-body-contactme',
  templateUrl: './body-contactme.component.html',
  styleUrls: ['./body-contactme.component.scss']
})
export class BodyContactmeComponent implements OnInit {

  result: Object;

    TriggerAlert = () => {
      console.log('triggered');
      this.http.get('http://localhost:3000/dowork').map((res: Response) => res.json()).subscribe(res => this.result = res);
      console.log(this.result);
}

  constructor(public http: Http) { 

  }

  ngOnInit() {
  }

}
