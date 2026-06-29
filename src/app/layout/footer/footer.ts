import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../shared/site-data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly site = SITE;
  protected readonly year = new Date().getFullYear();

  protected readonly nav = [
    { label: 'Services', route: '/', fragment: 'services' },
    { label: 'Work', route: '/work' },
    { label: 'Process', route: '/', fragment: 'process' },
    { label: 'About', route: '/', fragment: 'about' },
  ];
}
