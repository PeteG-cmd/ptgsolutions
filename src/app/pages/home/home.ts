import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { Hero } from '../../sections/hero/hero';
import { Services } from '../../sections/services/services';
import { Brands } from '../../sections/brands/brands';
import { About } from '../../sections/about/about';
import { WorkPreview } from '../../sections/work-preview/work-preview';
import { Testimonial } from '../../sections/testimonial/testimonial';
import { SITE } from '../../shared/site-data';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    Icon,
    Hero,
    Services,
    Brands,
    About,
    WorkPreview,
    Testimonial,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly site = SITE;
}
