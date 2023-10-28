// card.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageSrc!: string;
  @Input() link!: string;
  @Input() buttonText!: string;
  @Input() buttonLink!: string;
  @Input() blogData: any;
  active: boolean = false;

  onCardHover() {
    this.active = true;
  }

  onCardLeave() {
    this.active = false;
  }
}
