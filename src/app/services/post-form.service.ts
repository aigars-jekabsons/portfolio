//Pull information 

// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

// @Injectable()
// export class PostFormService {
  
//   constructor(private http: Http) {} 
//   PostForm() { 
//     return this.http.get('http://localhost:3000/api/postform').map((res) => res.json());
//   }

// }


import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PostFormService {

    public _url: string = "http://localhost:3000/api/postform"; // Url which handles JSON encoded data 

    constructor(public _http: Http) {} // Injecting the Http Service

    sendData(data): Observable<Object> {
        
        let encoded_data = JSON.stringify({ data });
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._url, encoded_data, options).map(
            (res: Response) => res.json() || {}
        );

}
}