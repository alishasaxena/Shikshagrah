import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { navigationLinks } from 'src/app/data/sample.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks: any;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.navLinks = navigationLinks;
  }
}
