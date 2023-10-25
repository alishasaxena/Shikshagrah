import { Component } from '@angular/core';
import { blogsData } from 'src/app/data/sample.data';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent {
  blogs = blogsData;
  // exp = exposureVisit;
}
