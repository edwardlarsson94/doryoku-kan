import { Component } from '@angular/core';
import { Lightbox } from '../lightbox/lightbox';

@Component({
  selector: 'app-about-section',
  imports: [Lightbox],
  styleUrl: './about-section.css',
  templateUrl: './about-section.html',
})
export class AboutSection {
  selectedImage: { url: string; alt: string } | null = null;

  openImage(url: string, alt: string): void {
    this.selectedImage = { url, alt };
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}