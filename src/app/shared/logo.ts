import { Component, HostBinding, Input } from '@angular/core';

/**
 * PTG "socket-bracket" logo, inlined as SVG so the brand webfonts (JetBrains
 * Mono for "PTG", Spectral for the wordmark) actually apply — they wouldn't if
 * the SVG were loaded via <img>. Bracket + text colour inherit from `color`;
 * the accent leads use `--logo-accent`. Two tones cover light/dark backgrounds.
 *
 * variant: 'lockup' (mark + "PTG SOLUTIONS") | 'mark' (mark only)
 * tone:    'colour' (forest on light) | 'cream' (on dark)
 * height:  px height; omit to fill the host's width (set the size in CSS).
 */
@Component({
  selector: 'app-logo',
  template: `
    @if (variant === 'mark') {
      <svg
        viewBox="0 0 100 100"
        [style.height.px]="height"
        [class.logo--fill]="height == null"
        role="img"
        aria-label="PTG Solutions"
      >
        <g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M36 22 H22 V36" /><path d="M36 78 H22 V64" /><path d="M64 22 H78 V36" /><path d="M64 78 H78 V64" />
        </g>
        <g stroke="var(--logo-accent)" stroke-width="4" stroke-linecap="round">
          <line x1="12" y1="50" x2="21" y2="50" /><line x1="79" y1="50" x2="88" y2="50" />
        </g>
        <circle cx="12" cy="50" r="3" fill="var(--logo-accent)" /><circle cx="88" cy="50" r="3" fill="var(--logo-accent)" />
        <text
          x="50" y="52" text-anchor="middle" dominant-baseline="central"
          font-family="'JetBrains Mono', ui-monospace, monospace" font-weight="700"
          font-size="21" letter-spacing="-0.5" fill="currentColor"
        >PTG</text>
      </svg>
    } @else {
      <svg
        viewBox="0 0 640 120"
        [style.height.px]="height"
        [class.logo--fill]="height == null"
        role="img"
        aria-label="PTG Solutions"
      >
        <g transform="translate(10,10)">
          <g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M36 22 H22 V36" /><path d="M36 78 H22 V64" /><path d="M64 22 H78 V36" /><path d="M64 78 H78 V64" />
          </g>
          <g stroke="var(--logo-accent)" stroke-width="4" stroke-linecap="round">
            <line x1="12" y1="50" x2="21" y2="50" /><line x1="79" y1="50" x2="88" y2="50" />
          </g>
          <circle cx="12" cy="50" r="3" fill="var(--logo-accent)" /><circle cx="88" cy="50" r="3" fill="var(--logo-accent)" />
          <text
            x="50" y="52" text-anchor="middle" dominant-baseline="central"
            font-family="'JetBrains Mono', ui-monospace, monospace" font-weight="700"
            font-size="21" letter-spacing="-0.5" fill="currentColor"
          >PTG</text>
        </g>
        <line x1="128" y1="26" x2="128" y2="94" stroke="currentColor" stroke-width="1.5" opacity="0.18" />
        <text
          x="152" y="62" dominant-baseline="central"
          font-family="'Spectral', Georgia, serif" font-weight="600"
          font-size="52" letter-spacing="0.3" fill="currentColor"
        >PTG SOLUTIONS</text>
      </svg>
    }
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
        color: #183c18;
        --logo-accent: #1e8e4e;
      }
      :host(.tone-cream) {
        color: #faf9f5;
        --logo-accent: #6fd89a;
      }
      svg {
        display: block;
        width: auto;
      }
      svg.logo--fill {
        width: 100%;
        height: auto;
      }
    `,
  ],
})
export class Logo {
  @Input() variant: 'lockup' | 'mark' = 'lockup';
  @Input() tone: 'colour' | 'cream' = 'colour';
  @Input() height?: number;

  @HostBinding('class.tone-cream') get isCream(): boolean {
    return this.tone === 'cream';
  }
}
