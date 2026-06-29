import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { Eyebrow } from '../../shared/eyebrow';
import { CaseCard } from '../../shared/case-card';
import { RevealDirective } from '../../shared/reveal.directive';
import { CASE_STUDIES } from '../../shared/site-data';

@Component({
  selector: 'app-work-preview',
  imports: [RouterLink, Icon, Eyebrow, CaseCard, RevealDirective],
  templateUrl: './work-preview.html',
  styleUrl: './work-preview.scss',
})
export class WorkPreview {
  protected readonly studies = CASE_STUDIES.slice(0, 3);
}
