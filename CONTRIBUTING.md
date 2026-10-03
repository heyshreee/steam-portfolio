# Contributing

Thanks for helping improve this portfolio template! It stays useful only if
contributions keep it simple, fast and easy to customize.

## Getting set up

```bash
npm install
npm run dev
```

Before opening a pull request:

```bash
npm run lint     # oxlint
npm run build    # tsc -b && vite build
```

Both must pass — `build` runs the TypeScript compiler in strict project mode,
so type errors will fail the build.

## What makes a good contribution

- **Keep it configuration-driven.** Content belongs in
  `src/config/portfolio.ts`; components should render whatever the config
  says. Please do not hardcode personal content in components.
- **Preserve the design.** This template's look and feel is the product. Bug
  fixes, accessibility work and small visual refinements are welcome;
  redesigns are not.
- **Keep dependencies at zero.** Every dependency has to earn its place. Do not
  add libraries for something that can be done in a few lines of the existing
  stack.
- **Keep it framework-light.** No backend, database, auth or CMS.

## Reporting bugs

Open an issue with:

- what you did, what you expected, what happened
- your Node version (`node -v`) and OS
- the browser, if it is browser-specific

## Suggesting features

Open an issue first and describe the user problem it solves. A feature that
only adds config options for one person is usually better handled by an
example in the config comments.

## Pull requests

1. Fork the repo and create a branch (`git checkout -b my-change`).
2. Make the change, keeping the diff focused.
3. Run `npm run lint && npm run build`.
4. Describe what changed and why in the PR body.
5. Keep example content generic — no real names, emails or companies.

## Code of Conduct

By participating you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).