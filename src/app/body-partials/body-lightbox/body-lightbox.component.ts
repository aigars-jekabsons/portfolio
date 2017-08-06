import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-body-lightbox',
  templateUrl: './body-lightbox.component.html',
  styleUrls: ['./body-lightbox.component.scss']
})
export class BodyLightboxComponent implements OnInit {

 @Input() VideoLink:any;

closelLightBox = () =>{
  document.body.classList.remove('displayLightbox');
}
  constructor() { }

  ngOnInit() {
  }

}
