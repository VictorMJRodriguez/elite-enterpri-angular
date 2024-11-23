import { Component, OnInit } from '@angular/core';
import { Content } from '../../../shared/models/content';

@Component({
  selector: 'app-guaranteed-rent',
  templateUrl: './guaranteed-rent.component.html',
  styleUrls: ['./guaranteed-rent.component.css']
})

export class GuaranteedRentComponent implements OnInit {


  content : Content [] = [
    {
      url: 'houses/16.jpeg',
      title: 'No more late payments',
      text: 'Receive your rent on the same day each month through standing order.'
    },
    {
      url: 'houses/15.jpeg',
      title: 'Cashflow certainty',
      text: `You'll have a clear understanding of your incoming payments and their timing.`
    },
    {
      url: 'houses/6.jpeg',
      title: 'Voids a thing of the past',
      text: 'Rental payments remain uninterrupted, even during vacant periods.'
    }          
  ]

  constructor() { }

  ngOnInit() {
  }

}
