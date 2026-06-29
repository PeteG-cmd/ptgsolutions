# PTG Solutions website

Marketing site for **PTG Solutions LTD** — product consulting and development
for startups and small businesses. Built with **Angular 22** (standalone
components, SCSS) and deployed to **GitHub Pages** at
[ptgsolutions.co.uk](https://ptgsolutions.co.uk).

Styled with the **PTG "nature-meets-technology" brand** (forest greens, a single
growth-green accent, warm paper neutrals, the circuit-tree mark, and the
Spectral / Hanken Grotesk / JetBrains Mono type system). The brand source kit
lives in `claude-code-handoff/` (outside the app).

## Requirements

- Node **≥ 24.15** (or ≥ 22.22). With nvm: `nvm install 24 && nvm use 24`.

## Local development

```bash
npm install
npm start            # ng serve -> http://localhost:4200
npm run build        # production build into dist/ptgsolutions/browser
```

## Editing content

Most copy lives in one place — edit and the components update:

- **`src/app/shared/site-data.ts`** — business name, contact email, intro copy,
  **Services**, **Process** steps, **Clients** (trusted-by), **Case studies**
  (Work), hero **Stats** and the **Testimonial**. Stats / case studies /
  testimonial are clearly-marked placeholders — replace with real content.
- **`src/theme.scss`** — design tokens (colours, fonts, spacing). Tweak these to
  adjust the brand; nothing else needs to change.
- Logos live in **`public/assets/logo/`**; client logos in
  **`public/assets/clients/`** (referenced from `site-data.ts`).

## Structure

```
src/app/
  app.{ts,html,scss}        # shell: header + <router-outlet> + footer
                            #   (header/footer hidden on the full-bleed /login route)
  app.routes.ts             # '' Home · 'work' · 'contact' · 'login' (all lazy)
  layout/{header,footer}/    # sticky blurred nav · forest footer
  pages/home/                # composes the sections + forest CTA band
  pages/work/                # case-study grid
  pages/contact/             # brand form -> composes a pre-filled mailto on submit
  pages/login/               # split-screen sign-in (UI only; submit is a stub)
  sections/{hero,brands,services,about,work-preview,testimonial}/
  shared/site-data.ts        # editable content
  shared/icon.ts             # inline Lucide icon component
  shared/{eyebrow,stat,case-card}.ts
  shared/reveal.directive.ts # reveal-on-scroll (IntersectionObserver)
```

The **Contact** form has no backend (GitHub Pages): on submit it validates
client-side and opens a pre-filled email in the visitor's mail client addressed
to `SITE.email`. The **Login** page is UI only — its submit is a stub marked
`// TODO: wire to auth API` for when a backend is added.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
app, adds a `404.html` SPA fallback, and publishes to GitHub Pages. The custom
domain is kept via `public/CNAME` (copied to the site root on build).

**One-time setup:** in the GitHub repo, **Settings → Pages → Build and
deployment → Source = "GitHub Actions"**.
