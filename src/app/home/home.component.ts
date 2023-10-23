import { Component } from '@angular/core';
import { heroData, stats } from '../data/sample.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 heroData: any = heroData;
 stat: any = stats;
}
