import { booleanAttribute, Component, Input } from '@angular/core';

/**
 * Eyebrow / kicker — the signature PTG device above a headline.
 * Mono, uppercase, tracked. `rule` adds the short leading line;
 * `onDark` switches to the light-green colour for forest backgrounds.
 */
@Component({
  selector: 'app-eyebrow',
  template: `
    <span class="ptg-eyebrow" [class.ptg-eyebrow--on-dark]="onDark">
      @if (rule) {
        <span class="ptg-eyebrow__rule"></span>
      }
      <ng-content />
    </span>
  `,
})
export class Eyebrow {
  @Input({ transform: booleanAttribute }) rule = false;
  @Input({ transform: booleanAttribute }) onDark = false;
}
