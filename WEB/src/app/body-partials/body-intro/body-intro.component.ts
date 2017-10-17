import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-intro',
  templateUrl: './body-intro.component.html',
  styleUrls: ['./body-intro.component.scss']
})
export class BodyIntroComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
  body_intro = {
    "title1":"I'm AJ",
    "title2":"Passionate Angular Full stack developer",
    "arrowtext":"View my work",  
    "bubbletext":"Hi,"
    }
  intro_navigation = [
    {
      'abriviation':'XP',
      'title':'Expertise',
      'scrollTo':'#intro'
    },
    {
      'abriviation':'WK',
      'title':'Work',
      'scrollTo':'#portfolio-photos'
    },
    {
      'abriviation':'CT',
      'title':'Contact',
      'scrollTo':'#contactme'
    },
  ]
}
