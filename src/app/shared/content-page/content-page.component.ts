import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent {
  @Input() objective!: string;
  @Input() description!: string;
  @Input() tags!: any;
  @Input() date!: string;
  @Input() sqaDomain!: string;
  @Input() subCategory!: string;
  @Input() stepsTaken!: any;
  @Input() isVideo!: boolean;
}
