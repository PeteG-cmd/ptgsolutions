import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Eyebrow } from '../../shared/eyebrow';
import { RevealDirective } from '../../shared/reveal.directive';
import { PROCESS } from '../../shared/site-data';

@Component({
  selector: 'app-about',
  imports: [RouterLink, Eyebrow, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly steps = PROCESS;
}
