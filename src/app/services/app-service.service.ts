import {
  Injectable, EventEmitter,
  Output
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  clickedCardTitle!: string;
  constructor() { }
}
