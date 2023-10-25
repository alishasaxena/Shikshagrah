import { Component } from '@angular/core';
import { blogsData, filterOptions, roleOptions, sortOptions } from 'src/app/data/sample.data';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent {
  blogs = blogsData;
  sortOptions =  sortOptions;
  filter =  filterOptions;
  role =  roleOptions;
  // exp = exposureVisit;
}
