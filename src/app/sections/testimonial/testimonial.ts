import { Component } from '@angular/core';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';
import { TESTIMONIAL } from '../../shared/site-data';

@Component({
  selector: 'app-testimonial',
  imports: [Icon, RevealDirective],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss',
})
export class Testimonial {
  protected readonly testimonial = TESTIMONIAL;
}
