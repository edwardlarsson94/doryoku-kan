import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  imports: [],
  styleUrl: './lightbox.css',
  templateUrl: './lightbox.html',
})
export class Lightbox {
  @Input() isOpen = false;
  @Input() imageUrl = '';
  @Input() imageAlt = '';
  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}