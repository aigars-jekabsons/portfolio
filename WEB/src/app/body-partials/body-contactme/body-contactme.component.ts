import { Component, OnInit } from '@angular/core';
import { PostFormService } from '../../services/post-form.service';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-body-contactme',
  templateUrl: './body-contactme.component.html',
  styleUrls: ['./body-contactme.component.scss'],
  providers: [ PostFormService ],
})
export class BodyContactmeComponent implements OnInit {
 FormSubmitted = true;
 info = '';
// result: any;
//     TriggerAlert = () => {
//             this.content.PostForm().subscribe(res => {
//               this.result = res;         
//         })
// }


  //   constructor(public content: PostFormService) {

  // }
 constructor(public PostFormService: PostFormService) {}

    ngOnInit() {}

    TriggerAlert() {
      let dataFromForm = [];
      var Inputfields = document.getElementById('myContactForm').querySelectorAll('input')
      var Textfield = document.getElementById('myContactForm').querySelectorAll('textarea')
      for (let i = 0; i < Inputfields.length; i++) { 
         dataFromForm[i] = Inputfields[i].value;
      }
      dataFromForm[3] = Textfield[0].value;

        this.PostFormService.sendData(dataFromForm).subscribe(
            response => console.log('success'), // success
            error => console.log('error'),       // error
            () => console.log('complete'),     // complete
        )
        this.FormSubmitted = false;
    }

    // TriggerAlert() {
    //   this.PostFormService.PostForm().subscribe(data => this.info = data);
    // }
}
