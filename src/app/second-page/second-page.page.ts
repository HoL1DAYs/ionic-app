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
  contacts: any[] = []
  contact: any
  contactId: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.contactId = JSON.stringify(params)
    })
    this.LoadContacts()

    this.LoadContact()

  }
  async LoadContacts(){
    try{
      this.permission = await Contacts.requestPermissions()
      Contacts.getContacts({
        projection: {
          name: true,
          phones: true
        },
      }).then(results=>{
        this.contacts = results.contacts
      })

    }catch (e){
      console.log(e)
    }

  }

  async LoadContact(){
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
        alert(this.contact)
      })

    }catch (e){
      console.log(e)
    }

  }


}
