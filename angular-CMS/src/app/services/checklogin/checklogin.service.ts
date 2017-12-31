import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class CheckloginService {
  
  constructor(private http: Http, @Inject(DOCUMENT) private document: Document) {} 
  PostForm() { 
    if (this.document.location.origin == 'http://localhost:4201'){
      var _url: string = "http://localhost:3000/checkstatus";
  } else {
      var _url: string = "/checkstatus";
  }
    return this.http.get(_url).map((res) => res.json());
  }

}
