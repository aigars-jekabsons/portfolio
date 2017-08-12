import { Component, OnInit, Input, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { ContentHandlerService } from '../../services/content-handler.service'

@Component({
  selector: 'app-body-portfolio',
  templateUrl: './body-portfolio.component.html',
  styleUrls: ['./body-portfolio.component.scss'],
  providers: [ ContentHandlerService ],
})
export class BodyPortfolioComponent implements OnInit {

  @Input() displayPortfolioItem:boolean; portfolioObject:string;
  @Output() DisplayPortfolioItem:EventEmitter<any> = new EventEmitter(); 
  @Output() PortfolioObject:EventEmitter<any> = new EventEmitter();
  @Output() VideoLink:EventEmitter<any> = new EventEmitter();
  @Output() IsLightBoxVideo:EventEmitter<any> = new EventEmitter();
 
  DisplayProject(event){
  
  if(event.parentElement.nodeName == 'FIGCAPTION'){
    var TargetedItem = event.parentElement.parentElement
  }else{
    var TargetedItem = event.parentElement
  }

//  TargetedItem.classList.add('active')
//   document.body.classList.add('hideoverflow')
//   this.displayPortfolioItem = true;
  this.portfolioObject = this._ContentHandlerService[TargetedItem.id];
  
//   setTimeout(() => {
//       this.DisplayPortfolioItem.emit(this.displayPortfolioItem);
//       this.PortfolioObject.emit(this.portfolioObject);
//   }, 1200);
  this.IsLightBoxVideo.emit(false);
  this.VideoLink.emit(this.portfolioObject);

  document.body.classList.add('displayLightbox');
}

      


 Portfolio:Array <any> = []; 

  constructor(public _ContentHandlerService: ContentHandlerService) {
            this._ContentHandlerService.get().subscribe((data) => {
              this._ContentHandlerService = data.Portfolio;            
        })
  }

  ngOnInit() {

    
  }

}

