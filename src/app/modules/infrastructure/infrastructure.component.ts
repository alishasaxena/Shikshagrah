import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blogsData, roleOptions, sortOptions } from 'src/app/data/sample.data';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {
  constructor(private router: Router, public _as: AppServiceService) { }

  // blogs = blogsData;

  blogs: any[] = [];
  sortOptions = sortOptions;
  role = roleOptions;
  selectedSortOption: string | null = null;
  selectedRole: string | null = null;

  // exp = exposureVisit;

  ngOnInit(): void {
    console.log('jhdfghj')

    this._as.cardSelected.subscribe((data: any) => {
      console.log(data, "data")
      this.blogs = [...data]
    })

    this.blogs = this._as.selectedCardBlogData
  }

  filterBlogsByRole(role: string) {
    return this.blogs.filter(blog => blog.tags.includes(role));
  }

  handleRoleSelected(role: string) {
    this.selectedRole = role;
    this.blogs = this.filterBlogsByRole(role);
  }

  resetFilter() {
    this.selectedRole = null;
    this.blogs = blogsData;
  }

  sortedCardsAtoZ() {
    this.blogs.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortedCardsZtoA() {
    this.blogs.sort((a, b) => b.title.localeCompare(a.title));
  }

  handleSortOptionSelected(option: string) {
    this.selectedSortOption = option;
    if (option === 'A-Z') {
      this.sortedCardsAtoZ();
    } else if (option === 'Z-A') {
      this.sortedCardsZtoA();
    }
  }
}

