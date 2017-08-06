import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';



@Component({
  selector: 'app-body-portfolio-item',
  templateUrl: './body-portfolio-item.component.html',
  styleUrls: ['./body-portfolio-item.component.scss']
  
})



export class BodyPortfolioItemComponent implements OnInit {
  public portfolioContent;


    @Input() displayPortfolioItem:boolean;
    @Input() portfolioObject:any;
    @Output() DisplayPortfolioItem:EventEmitter<any> = new EventEmitter();

  GoBack = () =>{
      document.body.classList.remove('hideoverflow')
      document.getElementById('header').style.display="block";
      this.displayPortfolioItem = false;
      this.DisplayPortfolioItem.emit(this.displayPortfolioItem);
    
  }
  constructor() {}





  ngOnInit() {
  document.body.classList.add('hideoverflow')
  document.getElementById('header').style.display="none";

  }

}
