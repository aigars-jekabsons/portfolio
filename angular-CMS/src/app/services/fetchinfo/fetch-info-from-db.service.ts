import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { DOCUMENT } from '@angular/common';

@Injectable()

export class FetchInfoFromDbService {
public baseUrl;
  constructor(private http: Http, @Inject(DOCUMENT) private document: Document) {
    console.log(this.document.location.origin)
    if (this.document.location.origin == 'http://localhost:4201'){
     this.baseUrl = "http://localhost:3000/";
  } else {
    this.baseUrl = "";
  };
  } 


  ContactForm() { 
    console.log(this.baseUrl)
    return this.http.get(this.baseUrl +'api/getformcontent').map((res) => res.json());
  }

  RepliedStatus(data): Observable<Object> {
    let encoded_data = JSON.stringify({ data });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl +'api/changeRepliedStatus', encoded_data, options).map(
        (res: Response) => res.json() || {}
    );

}


DeleteContact(data): Observable<Object> {
  let encoded_data = JSON.stringify({ data });
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
  let options = new RequestOptions({ headers: headers });

  return this.http.post(this.baseUrl +'api/DeleteEntry', encoded_data, options).map(
      (res: Response) => res.json() || {}
  );

}

generateJSON(data): Observable<Object> {
  let encoded_data = JSON.stringify({ data });
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
  let options = new RequestOptions({ headers: headers });

  return this.http.post(this.baseUrl +'api/generateJSON', encoded_data, options).map(
      (res: Response) => res.json() || {}
  );

}
//Populates content for the content page
PopulateContentSection(data): Observable<Object> {
  let encoded_data = JSON.stringify({ data });
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
  let options = new RequestOptions({ headers: headers });

  return this.http.post(this.baseUrl +'api/populateContent', encoded_data, options).map(
      (Response: Response) => Response.json() || {}
      
  );

}

}


