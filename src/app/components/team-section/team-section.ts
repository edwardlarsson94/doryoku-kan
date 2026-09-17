import { Component } from '@angular/core';
import { Lightbox } from '../lightbox/lightbox';

@Component({
  selector: 'app-team-section',
  imports: [Lightbox],
  styleUrl: './team-section.css',
  templateUrl: './team-section.html',
})
export class TeamSection {
  selectedImage: { url: string; alt: string } | null = null;

  openImage(url: string, alt: string): void {
    this.selectedImage = { url, alt };
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}