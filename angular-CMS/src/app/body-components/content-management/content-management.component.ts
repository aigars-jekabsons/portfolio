import { Component, OnInit } from '@angular/core';
import { FetchInfoFromDbService } from './../../services/fetchinfo/fetch-info-from-db.service';
@Component({
  selector: 'cms-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss'],
  providers: [FetchInfoFromDbService]
})
export class ContentManagementComponent implements OnInit {

  constructor(public FetchInfoFromDbService: FetchInfoFromDbService) { }

  ngOnInit() {
  }
  DisplayIntro = false;
  Textcontent:any = [];
  PopulateSection = (content_introText) =>{
    
    this.FetchInfoFromDbService.PopulateContentSection(content_introText).subscribe(
      response => {
        this.Textcontent = response
        this.DisplayIntro = !this.DisplayIntro;
        console.log(response)
      },
      error => console.log(error),       // error
      () => console.log('success'),     // complete
  )
  }

  UpdateObject = (event, field) =>{
    this.Textcontent[0][field] = event.srcElement.value
  }
 
}
