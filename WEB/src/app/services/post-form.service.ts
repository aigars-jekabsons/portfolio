import { Injectable, Inject  } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class PostFormService {


    constructor(public _http: Http, @Inject(DOCUMENT) private document: Document) {} // Injecting the Http Service
    sendData(data): Observable<Object> {
    if (this.document.location.origin == 'http://localhost:4200'){
        var _url: string = "http://localhost:3000/api/postform";
    } else {
        var _url: string = "api/postform";
    }
    

    
        let encoded_data = JSON.stringify({ data });
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(_url, encoded_data, options);
        

}

//     sendBirdData(data): Observable<Object> {
//         let encoded_data = JSON.stringify({ data });
//         let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
//         let options = new RequestOptions({ headers: headers });

//         return this._http.post('http://ec2-18-216-24-220.us-east-2.compute.amazonaws.com:8080/controlData', encoded_data, options);
        

// }


} 