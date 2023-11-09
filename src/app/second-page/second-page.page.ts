import { Component, OnInit } from '@angular/core';
import {Contacts} from "@capacitor-community/contacts";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
  permission:any
  contact: any
  contactId: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params)=>{
      this.contactId =params['id']
    })

    this.LoadContacts()

  }

  async LoadContacts(){
    try{
      this.permission = await Contacts.requestPermissions()
      Contacts.getContact({
        contactId: this.contactId,
        projection: {
          name: true,
          phones: true,
          emails: true,
          note: true,
          urls:true,
          postalAddresses: true,
          image: true,
          organization: true,
          birthday: true
        }
      }).then(results=>{
        this.contact = results.contact
      })

    }catch (e){
      console.log(e)
    }

  }

}
