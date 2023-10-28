import {
  Injectable, EventEmitter,
  Output
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  selectedCardBlogData: any

  @Output('onBlogSelection') blogSelected: EventEmitter<any> =
    new EventEmitter<any>();
  @Output('onCardSelection') cardSelected: EventEmitter<any> =
    new EventEmitter<any>();

  @Output('onPrevNextClick') onPrevNextClick: EventEmitter<any> =
    new EventEmitter<any>();


  // shareBlogData(index: number) {
  //   this.blogSelected.emit(index)
  // }

  shareBlogData(data: any, index: number) {
    this.blogSelected.emit({ content: data, index })
  }

  shareCardData(data: any) {
    this.selectedCardBlogData = [...data]
    this.cardSelected.emit(data)
  }
}
