import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckloginService {
  
  constructor(private http: Http) {} 
  PostForm() { 
    return this.http.get('http://localhost:3000/checkstatus').map((res) => res.json());
  }

}
