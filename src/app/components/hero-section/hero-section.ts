import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero-section',
  styleUrl: './hero-section.css',
  templateUrl: './hero-section.html',
})
export class HeroSection implements AfterViewInit {
  @ViewChild('videoFondo') videoFondo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.videoFondo.nativeElement;
    video.muted = true;
    video.load();
    video.play().catch(() => {
      const reproducir = () => {
        video.play().catch(() => {});
        document.removeEventListener('click', reproducir);
      };
      document.addEventListener('click', reproducir, { once: true });
    });
  }
}