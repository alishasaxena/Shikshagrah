import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
 @Input() date: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tags: string[] = [];
}
