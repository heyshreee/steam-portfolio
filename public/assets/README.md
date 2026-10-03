# Assets

Static files served from the site root. Reference them in
`src/config/portfolio.ts` with a leading slash, e.g.
`imgSrc: '/assets/projects/taskflow.svg'`.

| Folder        | What goes here                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------- |
| `projects/`   | One **16:9** preview image per project (SVG, PNG or WebP work fine). Four example mockups ship with the template. |
| `profile/`    | Your photo, and a 1200×630 `og-image.png` for link previews on social platforms.                |
| `resume/`     | Your `resume.pdf`, then set `resume.url: '/assets/resume/resume.pdf'` in the config.           |
| `icons/`      | Any custom logos, favicons or brand marks. The favicon lives at `public/favicon.svg`.           |

## Replacing the example project images

The four files in `projects/` are original vector mockups drawn for this
template — replace them with screenshots of your own work. Keep the same file
names and nothing else has to change, or point `imgSrc` at your own files:

```ts
projects: [
  {
    title: 'TaskFlow',
    imgSrc: '/assets/projects/taskflow.png', // <- your file
    // ...
  },
]
```

**Recommended size:** 1280×720 (16:9). The card crops the bottom of the image,
so leave the interesting part in the upper two thirds.

## Adding an OpenGraph image

Most social platforms do not render SVG previews, so use a PNG:

```ts
seo: {
  image: '/assets/profile/og-image.png', // 1200x630
}
```

## Note on licensing

The mockups in `projects/` were created for this template and are covered by
the repo's MIT license — reuse or replace them freely. Anything you drop in
here is yours: only redistribute images you have the right to use.