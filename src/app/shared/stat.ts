import { booleanAttribute, Component, Input } from '@angular/core';

/**
 * Stat — a headline metric. Value renders in Spectral; label in mono.
 */
@Component({
  selector: 'app-stat',
  template: `
    <div class="stat" [class.stat--on-dark]="onDark">
      <span class="stat__value">{{ value }}</span>
      <span class="stat__label">{{ label }}</span>
    </div>
  `,
  styles: [
    `
      .stat {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
      }
      .stat__value {
        font-family: var(--font-display);
        font-size: var(--text-3xl);
        font-weight: var(--weight-semibold);
        line-height: 1;
        letter-spacing: var(--tracking-tight);
        color: var(--text-primary);
      }
      .stat__label {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        letter-spacing: var(--tracking-wide);
        color: var(--text-muted);
      }
      .stat--on-dark .stat__value {
        color: var(--paper);
      }
      .stat--on-dark .stat__label {
        color: var(--growth-300);
      }
    `,
  ],
})
export class Stat {
  @Input({ required: true }) value = '';
  @Input({ required: true }) label = '';
  @Input({ transform: booleanAttribute }) onDark = false;
}
