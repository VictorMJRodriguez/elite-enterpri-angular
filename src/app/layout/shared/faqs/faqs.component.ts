import { Component, OnInit } from '@angular/core';
import { Content } from '../../../shared/models/content';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  collapse:boolean[]=[]

  content : Content [] = [
    {
      title: '3-5 year agreements with guaranteed rent',
      text: 'Your rent is guaranteed for the entire term of the management agreement with no commissions or hidden fees.'
    },
    {
      title: 'Free cosmetic refurb completed by our power team',
      text: `We will carry out a free cosmetic refurb and furnish your property to attract professional tenants. This won’t cost you a penny.`
    },
    {
      title: 'Viewings with professional tenants to fill your property',
      text: `We conduct viewings with our company clients including East Midlands Airport, Bombardier, The Queens Medical and secure the very best professional tenants.
      We pay you whilst we find the clients, to minimise your void period.`
    },
    {
      title: 'Management and maintenance of your property',
      text: `Elite Enterprise Properties take over all of the management and maintenance of the property to give you a truly “hands-off” experience. `
    },
    {
      title: 'End of agreement purchase options',
      text: `At the end of our agreement we can provide you with several options, which could also include further extention of rent & be able to take on the property for a longer period of time, if it aligns with your long-term goals. No fees, no agents & no hassle!`
    }             
  ]

  constructor() { }

  ngOnInit() {

    this.collapse = new Array(this.content.length).fill(true);

  }

}
