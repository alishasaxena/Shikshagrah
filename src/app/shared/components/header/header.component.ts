import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router, NavigationEnd } from '@angular/router';
import { navigationLinks } from 'src/app/data/sample.data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks: any;
  isHomePage: boolean = false;


  constructor(private dataService: DataService, private router: Router, private location: Location) { }
  ngOnInit(): void {
    this.navLinks = navigationLinks;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.headerupdate(event);
      }
    });
  }

  headerupdate(event: any) {
    if (event.url !== "/") {
      this.isHomePage = false
    } else {
      this.isHomePage = true
    }
  }
  goBack() {
    this.location.back();
  }

}
