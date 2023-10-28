import { Component } from '@angular/core';
import { blogsData, roleOptions, sortOptions } from 'src/app/data/sample.data';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent {
  blogs = blogsData;
  sortOptions =  sortOptions;
  role =  roleOptions;
  selectedSortOption: string | null = null;
  selectedRole: string | null = null;

  // exp = exposureVisit;

   ngOnInit(): void {
    console.log('jhdfghj')
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

  sortedCardsAtoZ(){
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

