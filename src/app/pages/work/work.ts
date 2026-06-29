import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { Eyebrow } from '../../shared/eyebrow';
import { CaseCard } from '../../shared/case-card';
import { CASE_STUDIES } from '../../shared/site-data';

@Component({
  selector: 'app-work',
  imports: [RouterLink, Icon, Eyebrow, CaseCard],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  protected readonly studies = CASE_STUDIES;
}
