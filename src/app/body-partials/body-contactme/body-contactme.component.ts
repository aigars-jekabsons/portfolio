import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-body-contactme',
  templateUrl: './body-contactme.component.html',
  styleUrls: ['./body-contactme.component.scss']
})
export class BodyContactmeComponent implements OnInit {

  result: any;

    TriggerAlert = () => {
      console.log('triggered');
      this.http.get('http://localhost:3000/dowork').map((res) => res.json()).subscribe(res => this.result = res);

}

  constructor(public http: Http) { 

  }

  ngOnInit() {
  }

}
