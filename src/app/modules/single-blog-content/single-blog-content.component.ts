import { Component, OnDestroy, OnInit } from '@angular/core';
import { exposureVisit } from 'src/app/data/sample.data';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-single-blog-content',
  templateUrl: './single-blog-content.component.html',
  styleUrls: ['./single-blog-content.component.css']
})
export class SingleBlogContentComponent implements OnInit, OnDestroy {
  exp = exposureVisit[0];
  constructor(public _as: AppServiceService,) { }
  ngOnInit() {
    this._as.blogSelected.subscribe((index: number) => {

      // NOTE: Ye check Mai hta dungi baad me, Abhi k liye additional check lgaya hai coz exposureVisit me 2 he data hai.

      if (index > 1) {
        index = 0
      }


      this.exp = exposureVisit[index]
    })
  }

  ngOnDestroy() {
    // this._as.blogSelected.unsubscribe()
  }


}
