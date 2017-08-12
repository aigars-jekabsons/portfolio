import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-body-lightbox',
  templateUrl: './body-lightbox.component.html',
  styleUrls: ['./body-lightbox.component.scss']
})
export class BodyLightboxComponent implements OnInit {

@Input() VideoLink:any;
@Input() IslightboxContentaVideo:any;


closelLightBox = () =>{
  document.body.classList.remove('displayLightbox');
}
  constructor() { 
    
  }

  ngOnInit() {
   this.VideoLink = {
      "Title": "Our Discovery Island",
      "ImageSource": "ODI.jpg",
      "carouselImages": [
        {
          "image": "odi-1.jpg"
        },
        {
          "image": "odi-2.jpg"
        },
        {
          "image": "odi-3.jpg"
        }
      ],
      "CMSPlatform": "adobe.png",
      "techstack": "js.png",
      "description": "Your English course in eText format gives you a great learning experience online or on a tablet. eText brings the Students' Book, Workbook or Activity Book to life on your preferred device, with integrated media."
    }
  }

}
