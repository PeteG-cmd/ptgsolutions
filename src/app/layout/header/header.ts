import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../../shared/icon';
import { SITE } from '../../shared/site-data';

interface NavLink {
  label: string;
  /** Home-page fragment (scrolls) or absolute route. */
  fragment?: string;
  route?: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly site = SITE;
  protected readonly menuOpen = signal(false);

  protected readonly links: NavLink[] = [
    { label: 'Services', fragment: 'services' },
    { label: 'Work', route: '/work' },
    { label: 'Process', fragment: 'process' },
    { label: 'About', fragment: 'about' },
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
