import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { CLIENTS } from '../../shared/site-data';

@Component({
  selector: 'app-brands',
  imports: [RevealDirective],
  templateUrl: './brands.html',
  styleUrl: './brands.scss',
})
export class Brands {
  protected readonly clients = CLIENTS;
}
