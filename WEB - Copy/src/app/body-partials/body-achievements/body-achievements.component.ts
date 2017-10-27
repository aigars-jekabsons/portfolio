import { Component, OnInit } from '@angular/core';
import { ContentHandlerService } from '../../services/content-handler.service'

@Component({
  selector: 'app-body-achievements',
  templateUrl: './body-achievements.component.html',
  styleUrls: ['./body-achievements.component.scss'],
  providers: [ ContentHandlerService ]
})
export class BodyAchievementsComponent implements OnInit {

  testThePeriodicTable:any = [];
  constructor(public PeriodicTableItems: ContentHandlerService) {
            this.PeriodicTableItems.get().subscribe((data) => {
              this.testThePeriodicTable = data.PeriodicTable;            
        })
  }

  ngOnInit() {
  }

}
