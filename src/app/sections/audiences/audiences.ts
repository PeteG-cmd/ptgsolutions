import { Component } from '@angular/core';
import { Icon } from '../../shared/icon';
import { Eyebrow } from '../../shared/eyebrow';
import { RevealDirective } from '../../shared/reveal.directive';
import { AUDIENCES } from '../../shared/site-data';

@Component({
  selector: 'app-audiences',
  imports: [Icon, Eyebrow, RevealDirective],
  templateUrl: './audiences.html',
  styleUrl: './audiences.scss',
})
export class Audiences {
  protected readonly audiences = AUDIENCES;
}
