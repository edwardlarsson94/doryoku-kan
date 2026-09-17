import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderNav } from './components/header-nav/header-nav';
import { HeroSection } from './components/hero-section/hero-section';
import { AboutSection } from './components/about-section/about-section';
import { ClassesSection } from './components/classes-section/classes-section';
import { ValuesSection } from './components/values-section/values-section';
import { ScheduleSection } from './components/schedule-section/schedule-section';
import { GallerySection } from './components/gallery-section/gallery-section';
import { TeamSection } from './components/team-section/team-section';
import { EnrollmentSection } from './components/enrollment-section/enrollment-section';
import { SiteFooter } from './components/site-footer/site-footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderNav,
    HeroSection,
    AboutSection,
    ClassesSection,
    ValuesSection,
    ScheduleSection,
    GallerySection,
    TeamSection,
    EnrollmentSection,
    SiteFooter
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('doryoku-kan');
}