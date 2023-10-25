import { Component } from '@angular/core';
import { exposureVisit } from 'src/app/data/sample.data';

@Component({
  selector: 'app-single-blog-content',
  templateUrl: './single-blog-content.component.html',
  styleUrls: ['./single-blog-content.component.css']
})
export class SingleBlogContentComponent {
  exp = exposureVisit;
}
