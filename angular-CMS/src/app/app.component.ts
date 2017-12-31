import { Component, Inject } from '@angular/core';
import { CheckloginService } from './services/checklogin/checklogin.service';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'CMS-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CheckloginService]
})
export class AppComponent {
  title = 'CMS';
  info:any;

  constructor(public CheckloginService: CheckloginService, @Inject(DOCUMENT) private document: Document) {
          if (this.document.location.origin == 'http://localhost:4201'){
            var _url: string = "http://localhost:3000/login";
        } else {
            var _url: string = "/login";
        }
          let CheckLoginStatus = () => {
            this.CheckloginService.PostForm().subscribe(data =>{ 
              this.info = data
              if (this.info[0] == false){
                 window.location.href=_url;
              } 
            });
          }
        setInterval(function(){ 
          CheckLoginStatus();
         }, 300000);
         CheckLoginStatus();
     }

    ngOnInit() {

    }
    
  }