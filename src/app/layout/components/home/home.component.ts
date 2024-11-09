import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CheckPrimeOptions } from 'crypto';
import { CheckList } from '../../../shared/models/checklist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {


  checkList : CheckList[] = [
    {
      url: 'tick-bullet.svg',
      text: ' Properties and enjoy the perks of guaranteed rental income with seamless, no-cost property management.'
    },
    {
      url: 'tick-bullet.svg',
      text: ' Expert property management services included.'
    },
    {
      url: 'tick-bullet.svg',
      text: ' Repairs and upkeep handled as part of our packages'
    },
    {
      url: 'tick-bullet.svg',
      text: ' Zero fees, commissions, or hidden charges'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
