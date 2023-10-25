import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  onBlogItemClickHandler() {
    const blogTitle = this.title.replaceAll(" ", "-")
    this.router.navigate(['/blog', blogTitle]);
  }
}
