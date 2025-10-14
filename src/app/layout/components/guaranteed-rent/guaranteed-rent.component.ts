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
      url: 'houses/DSC_4481.jpg',
      title: 'No more late payments',
      text: 'Receive your rent on the same day each month through standing order.'
    },
    {
      url: 'houses/DSC_4493.jpg',
      title: 'Cashflow certainty',
      text: `You'll have a clear understanding of your incoming payments and their timing.`
    },
    {
      url: 'houses/DSC_6690.JPG',
      title: 'Voids a thing of the past',
      text: 'Rental payments remain uninterrupted, even during vacant periods.'
    }          
  ]

  constructor() { }

  ngOnInit() {
  }

}
