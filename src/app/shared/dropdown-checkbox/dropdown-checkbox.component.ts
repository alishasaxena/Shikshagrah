import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown-checkbox',
  templateUrl: './dropdown-checkbox.component.html',
  styleUrls: ['./dropdown-checkbox.component.css']
})
export class DropdownCheckboxComponent {
  @ViewChild('dropdownContainer') dropdownContainer!: ElementRef;

  @Input() text!: string;
  @Input() lists! : any;
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

   @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.dropdownContainer.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }
}
