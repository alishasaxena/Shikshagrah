import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() description: any = '';
  @Input() tags: string[] = [];
  @Input() index: number = 0;

  constructor(private router: Router, public _as: AppServiceService,) { }

  onBlogItemClickHandler() {
    const blogTitle = this.title.replaceAll(" ", "-")
    setTimeout(() => {
      this._as.shareBlogData(this.index)
    }, 0);
    this.router.navigate(['/blog', blogTitle]);
  }

 
  
}
