import { Component } from '@angular/core';
import { Icon } from '../../shared/icon';
import { Eyebrow } from '../../shared/eyebrow';
import { RevealDirective } from '../../shared/reveal.directive';
import { SERVICES } from '../../shared/site-data';

@Component({
  selector: 'app-services',
  imports: [Icon, Eyebrow, RevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly services = SERVICES;
}
