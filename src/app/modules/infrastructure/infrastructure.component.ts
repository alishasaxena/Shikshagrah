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
  blogsData: any[] = []
  sortOptions = sortOptions;
  role = roleOptions;
  selectedSortOption: string[] = [];
  selectedRole: string[]= [];

  // exp = exposureVisit;

  ngOnInit(): void {
    console.log('jhdfghj')

    this._as.cardSelected.subscribe((data: any) => {
      console.log(data, "data")
      this.blogs = [...data]
      this.blogsData = [...data]
    })

    this.blogs = [...this._as.selectedCardBlogData]
    this.blogsData = [...this._as.selectedCardBlogData]

  }

  filterBlogsByRole() {
    // return this.blogs.filter(blog => blog.tags.includes(role));
    this.blogs = [...this.blogsData]

    return this.blogs.filter(item => item.tags.some((tag:string) => this.selectedRole.includes(tag)))
  }  

  handleRoleSelected(role: string) {
    // this.selectedRole = role;
    let isPresent = this.selectedRole.findIndex((item) => item == role)
    if(isPresent > -1) {
      // already present
      this.selectedRole.splice(isPresent, 1)
    }else {
      // present
      this.selectedRole.push(role)
    }
    // this.blogs = this.filterBlogsByRole(role);
    if(this.selectedRole.length) {
      this.blogs = this.filterBlogsByRole();
    }else {
      this.blogs = [...this.blogsData]
    }
  }

  resetFilter() {
    this.selectedRole = [];
    this.blogs = blogsData;
  }

  sortedCardsAtoZ() {
    this.blogs.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortedCardsZtoA() {
    this.blogs.sort((a, b) => b.title.localeCompare(a.title));
  }

  handleSortOptionSelected(option: string) {
    // debugger
    // this.selectedSortOption = option;
    if (this.selectedSortOption.length && this.selectedSortOption[0] == option) {
      this.selectedSortOption = []
    }else {
      this.selectedSortOption[0] = option
    }

    if (!this.selectedSortOption.length) {
      this.blogs = [...this.blogsData]
      return
    }
    if (option === 'A-Z') {
      this.sortedCardsAtoZ();
    } else if (option === 'Z-A') {
      this.sortedCardsZtoA();
    }
  }
}

