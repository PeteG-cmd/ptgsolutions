import { Component, Input } from '@angular/core';
import { Icon } from './icon';
import { CaseStudy } from './site-data';

/**
 * Case-study card. Renders the project screenshot (or a centred client logo)
 * in the thumb; if no image is set — or it fails to load — it falls back to a
 * forest-tinted block with the circuit-tree watermark and the project initial.
 * A "Visit project" link is shown when the study has a public URL.
 */
@Component({
  selector: 'app-case-card',
  imports: [Icon],
  template: `
    <article class="case card card--interactive" [class.case--logo]="study.media === 'logo'">
      <div class="case__thumb">
        @if (study.image && !failed) {
          @if (study.media === 'logo') {
            <img
              [src]="study.image"
              [alt]="study.title + ' logo'"
              class="case__logo"
              (error)="failed = true"
            />
          } @else {
            <img
              [src]="study.image"
              [alt]="study.title + ' screenshot'"
              class="case__shot"
              loading="lazy"
              (error)="failed = true"
            />
          }
        } @else {
          <img
            src="assets/logo/ptg-tree-mark-white.png"
            alt=""
            aria-hidden="true"
            class="case__watermark"
          />
          <span class="case__initial">{{ study.title.charAt(0) }}</span>
        }
        <span class="badge case__stage">{{ study.stage }}</span>
      </div>
      <div class="case__body">
        <p class="case__sector">{{ study.sector }}</p>
        <h3 class="case__title">{{ study.title }}</h3>
        <p class="case__summary">{{ study.summary }}</p>
        <div class="case__tags">
          @for (tag of study.tags; track tag) {
            <span class="tag">{{ tag }}</span>
          }
        </div>
        @if (study.link) {
          <a
            class="case__link"
            [href]="study.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit project <app-icon name="arrow-up-right" [size]="16" />
          </a>
        }
      </div>
    </article>
  `,
  styleUrl: './case-card.scss',
})
export class CaseCard {
  @Input({ required: true }) study!: CaseStudy;
  /** Set when the thumbnail image 404s/errors, triggering the block fallback. */
  protected failed = false;
}
