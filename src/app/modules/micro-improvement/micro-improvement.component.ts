import { Component } from '@angular/core';
import { cardsData } from 'src/app/data/sample.data';

@Component({
  selector: 'app-micro-improvement',
  templateUrl: './micro-improvement.component.html',
  styleUrls: ['./micro-improvement.component.css']
})
export class MicroImprovementComponent {
  cards = cardsData;
}
