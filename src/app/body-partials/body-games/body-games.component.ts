import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body-games',
  templateUrl: './body-games.component.html',
  styleUrls: ['./body-games.component.scss']
})
export class BodyGamesComponent implements OnInit {


  @Output() VideoLink:EventEmitter<any> = new EventEmitter();

LaunchLightbox = (videoLink) => {
  this.VideoLink.emit(videoLink);
  document.body.classList.add('displayLightbox');
}
  constructor() { }

  ngOnInit() {
  }

}
