// card.component.ts

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service.service';

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

  constructor(private router: Router, public _as: AppServiceService) { }

  onCardHover() {
    this.active = true;
  }

  onCardLeave() {
    this.active = false;
  }

  onCardClickHandler() {
    setTimeout(() => {
      // console.log(this.blogData)
      this._as.shareCardData(this.blogData)
    }, 200);
    this.router.navigate([this.link]);
  }
}
