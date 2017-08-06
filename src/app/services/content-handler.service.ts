import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentHandlerService {

  constructor(private http: Http) {} 
  get() { 
    var JSONFILE = ["assets/json/Page-content.json"].join('')
    return this.http.get(JSONFILE)
      .map((res) => res.json())
  }

}
