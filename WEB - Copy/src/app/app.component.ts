import { Component, HostListener } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})




export class AppComponent {

    

  title = 'app works!';
    @HostListener('window:scroll', ['$event'])
    track(event) {
      if (event.srcElement.body.getElementsByClassName('table-wrapper')[0] == undefined) {
        return false;
      }
        if( event.currentTarget.pageYOffset >= 200)
        {
          event.srcElement.body.getElementsByClassName('table-wrapper')[0].style.position= "fixed";
          event.srcElement.body.getElementsByClassName('periodic-table')[0].classList.add('test');
        }else{
          event.srcElement.body.getElementsByClassName('table-wrapper')[0].style.position= "static";
          event.srcElement.body.getElementsByClassName('periodic-table')[0].classList.remove('test');
        }
      
    }


  constructor() {   }

  ngOnInit() {

  }

}

