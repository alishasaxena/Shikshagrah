import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown-checkbox',
  templateUrl: './dropdown-checkbox.component.html',
  styleUrls: ['./dropdown-checkbox.component.css']
})
export class DropdownCheckboxComponent implements OnInit{
  @ViewChild('dropdownContainer') dropdownContainer!: ElementRef;
  @Input() text!: string;
  @Input() lists! : any;
  isOpen = true;
   @Input() value!: string;
  @Input() correct!: boolean;
  @Input() error!: boolean;
  @Input() disabled!: boolean;
  @Input() borderRadius!: number;
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();
  @Input() selectedOption: string[] = [];


  ngOnInit(): void {
    this.isOpen = false;
  }
  selectOption(option: string) {
    // this.selectedOption = option;
    this.optionSelected.emit(option);
  }

  private onChange: any;
  private onTouched: any;

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
