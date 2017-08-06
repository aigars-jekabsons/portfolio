import { Component, OnInit } from '@angular/core';
import { ContentHandlerService } from '../../services/content-handler.service'

@Component({
  selector: 'app-body-periodic-table',
  templateUrl: './body-periodic-table.component.html',
  styleUrls: ['./body-periodic-table.component.scss'],
  providers: [ ContentHandlerService ],
})

export class BodyPeriodicTableComponent implements OnInit {

  testThePeriodicTable:any = [];
  constructor(public PeriodicTableItems: ContentHandlerService) {
            this.PeriodicTableItems.get().subscribe((data) => {
              this.testThePeriodicTable = data.PeriodicTable;            
        })
  }

  ngOnInit() {
  }

}
