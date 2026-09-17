import { Component } from '@angular/core';
import { Lightbox } from '../lightbox/lightbox';

@Component({
  selector: 'app-classes-section',
  imports: [Lightbox],
  styleUrl: './classes-section.css',
  templateUrl: './classes-section.html',
})
export class ClassesSection {
  selectedImage: { url: string; alt: string } | null = null;

  openImage(url: string, alt: string): void {
    this.selectedImage = { url, alt };
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}