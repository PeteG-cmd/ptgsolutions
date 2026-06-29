# Case-study screenshots

Drop the project screenshots here, using these exact filenames (referenced from
`src/app/shared/site-data.ts`):

| File                     | Case study              | Suggested ratio        |
| ------------------------ | ----------------------- | ---------------------- |
| `gaia-marketplace.png`   | Gaia — BNG Marketplace  | landscape, ~16:10 crop |
| `pharmadoctor.png`       | Pharmadoctor            | landscape, ~16:10 crop |
| `gaia-carbon.png`        | Gaia — Carbon Accounting| landscape, ~16:10 crop |

Cards display the image with `object-fit: cover` anchored to the top, so wide
hero/dashboard captures look best. Until a file is present the card gracefully
falls back to the forest block + project initial.

MOTH Drinks uses the existing logo at `assets/clients/moth.svg` (no file needed
here).
