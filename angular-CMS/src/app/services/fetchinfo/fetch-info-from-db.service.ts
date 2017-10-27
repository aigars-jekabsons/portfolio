import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FetchInfoFromDbService {

  constructor(private http: Http) {} 
  ContactForm() { 
    return this.http.get('api/getformcontent').map((res) => res.json());
  }

  RepliedStatus(data): Observable<Object> {
    let encoded_data = JSON.stringify({ data });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('api/changeRepliedStatus', encoded_data, options).map(
        (res: Response) => res.json() || {}
    );

}


DeleteContact(data): Observable<Object> {
  let encoded_data = JSON.stringify({ data });
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
  let options = new RequestOptions({ headers: headers });

  return this.http.post('api/DeleteEntry', encoded_data, options).map(
      (res: Response) => res.json() || {}
  );

}

generateJSON(data): Observable<Object> {
  let encoded_data = JSON.stringify({ data });
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
  let options = new RequestOptions({ headers: headers });

  return this.http.post('api/generateJSON', encoded_data, options).map(
      (res: Response) => res.json() || {}
  );

}
//Populates content for the content page
PopulateContentSection(data): Observable<Object> {
  let encoded_data = JSON.stringify({ data });
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
  let options = new RequestOptions({ headers: headers });

  return this.http.post('api/populateContent', encoded_data, options).map(
      (Response: Response) => Response.json() || {}
      
  );

}

}


