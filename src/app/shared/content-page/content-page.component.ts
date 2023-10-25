import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent {
  @Input() objective!: string;
  @Input() description!: string;
  @Input() recommendedFor!: any;
  @Input() recommendedDuration!: string;
  @Input() sqaaDomain!: string;
  @Input() subDomain!: string;
  @Input() stepsTaken!: any;
}
