import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { Eyebrow } from '../../shared/eyebrow';
import { Stat } from '../../shared/stat';
import { SITE, STATS } from '../../shared/site-data';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Icon, Eyebrow, Stat],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly site = SITE;
  protected readonly stats = STATS;
}
