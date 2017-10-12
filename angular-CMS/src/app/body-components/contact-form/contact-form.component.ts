import { Component, OnInit } from '@angular/core';
import { FetchInfoFromDbService } from './../../services/fetchinfo/fetch-info-from-db.service';

@Component({
  selector: 'cms-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [FetchInfoFromDbService]
})
export class ContactFormComponent implements OnInit {
  ContactFormData:any;
    ChangeToReplied = (rowsID) =>{
      for (var i = 0; i < this.ContactFormData.length; i++){
        console.log(this.ContactFormData[i].ID)
        if(this.ContactFormData[i].ID == rowsID){this.ContactFormData[i].Replied = 'Yes'}
      }
      this.FetchInfoFromDbService.RepliedStatus(rowsID).subscribe(
        response => console.log('success'), // success
        error => console.log('error'),       // error
        () => alert('success'),     // complete
    )
  }

  DeleteContact = (rowsID) =>{
    for (var i = 0; i < this.ContactFormData.length; i++){
      if(this.ContactFormData[i].ID == rowsID){this.ContactFormData.splice(i , 1)}
    }
    this.FetchInfoFromDbService.DeleteContact(rowsID).subscribe(
      response => console.log('success'), // success
      error => console.log('error'),       // error
      () => alert('success'),     // complete
  )
}
  

generateJSON = () =>{
  this.FetchInfoFromDbService.generateJSON(1).subscribe(
    response => console.log('success'), // success
    error => console.log('error'),       // error
    () => alert('success'),     // complete
)

}

  constructor(public FetchInfoFromDbService: FetchInfoFromDbService) {}

  ngOnInit() {
    this.FetchInfoFromDbService.ContactForm().subscribe(data =>{this.ContactFormData = data});
  }

}
