import { Component, OnInit } from '@angular/core';
import { Content } from '../../components/guaranteed-rent/guaranteed-rent.component';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  content : Content [] = [
    {
      url: 'houses/16.jpeg',
      title: 'Free Valuation',
      text: `Simply provide your property’s postcode and the number of bedrooms, and we’ll give you an instant, fair rental offer. This offer includes guaranteed rent payments, comprehensive property management, and repairs and maintenance for the entire duration of the agreement.
           Plus, we promise to return your property in its pre-let condition, accounting only for fair wear and tear.`
    },
    {
      url: 'houses/15.jpeg',
      title: 'Property Inspection',
      text: `We will conduct an inspection of your property to determine what is necessary to make it rental-ready and safe for tenants. We will request compliance documents, including the Energy Performance Certificate, 
          Landlord Gas Safety Report, and Electrical Installation Condition Report, along with any other required paperwork.`
    },
    {
      url: 'houses/6.jpeg',
      title: 'Terms & Handover',
      text: `Within 48 hours, if your property meets our compliance standards, we will finalize contract terms based on a flexible lease period of 3 to 7 years. Your guaranteed rental payments will commence from the contract date, and from there,
           it’s our responsibility to find tenants and manage the tenancy throughout the duration of our agreement.`
    }          
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
