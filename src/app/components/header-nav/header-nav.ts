import { AfterViewInit, Component, inject, signal, HostListener, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  imports: [],
  selector: 'app-header-nav',
  styleUrl: './header-nav.css',
  templateUrl: './header-nav.html',
})
export class HeaderNav implements AfterViewInit {
  private readonly document = inject(DOCUMENT);
  private readonly elementRef = inject(ElementRef);
  
  readonly activeSection = signal('inicio');
  readonly menuAbierto = signal(false);

  ngAfterViewInit(): void {
    const sections = Array.from(this.document.querySelectorAll<HTMLElement>('main section[id]'));
    if (!('IntersectionObserver' in window) || sections.length === 0) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) {
          this.activeSection.set((visibleSection.target as HTMLElement).id);
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((section) => observer.observe(section));
  }

  @HostListener('document:click', ['$event'])
  cerrarSiClicPorFuera(event: Event) {
    if (this.menuAbierto() && !this.elementRef.nativeElement.contains(event.target)) {
      this.menuAbierto.set(false);
    }
  }

  alternarMenu() {
    this.menuAbierto.set(!this.menuAbierto());
  }
}