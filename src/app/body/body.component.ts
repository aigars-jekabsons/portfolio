import { Component, OnInit} from '@angular/core';
import { BodyPortfolioComponent } from '../body-partials/body-portfolio/body-portfolio.component'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
     
})
export class BodyComponent implements OnInit {
 displayPortfolioItem:boolean = false;
  Myvariable:any;
  videoLink:any;
  constructor() { 
   }
CheckPageStatus(event){
  this.displayPortfolioItem = event;
  document.body.classList.remove('hideoverflow')
}
DisplayPortfolioContent(event){
  this.Myvariable = event;
}
FetchVideoLink(event){
  this.videoLink = event;
}

  ngOnInit() {
    
  }

}
