import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   template: `
    <app-header></app-header>
    <app-micro-improvement></app-micro-improvement>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vidya-amrit';
}
