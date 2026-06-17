# RemoteRecruit Landing

RemoteRecruit is a Vite + React single-page frontend for a remote hiring platform. It includes a public marketing landing page and a job applicants dashboard-style view.

## Framework / Libraries Used

- React 18
- Vite
- Tailwind CSS
- PostCSS / Autoprefixer

## Project Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The app runs at:

```text
http://127.0.0.1:5173/
```

If port `5173` is already in use, Vite will print the next available local URL.

## Scripts

```bash
npm run dev
```

Starts the Vite development server on `127.0.0.1`.

```bash
npm run build
```

Builds the production app into `dist/`.

```bash
npm run preview
```

Serves the production build locally with Vite preview.

## Routes

- `/` - RemoteRecruit landing page
- `/application` - Job applicants dashboard
- `/applications` - Job applicants dashboard
- `/invoice` - Job applicants dashboard placeholder route
- `/invoices` - Job applicants dashboard placeholder route

On the landing page, clicking the `Sign In` link opens the `/application` page.

Routing is currently handled in `src/App.jsx` by checking `window.location.pathname`.

## Project Structure

```text
src/
  App.jsx                 App page switch
  main.jsx                React entry point
  index.css               Tailwind imports and shared component styles
  pages/                  Page-level layouts
  components/common/      Shared UI components
  components/landing/     Landing page sections
  components/application/ Job applicants dashboard sections
  constants/              Static content and asset paths
  hooks/                  Shared React hooks

public/assets/            Runtime image and SVG assets
dist/                     Production build output, ignored by Git
```

## Asset Notes

Most runtime assets are loaded from `public/assets/` using the `/assets/` path. The Bungie avatar used in the sidebar was extracted from `Application/nav sidebar.png` into:

```text
public/assets/bungie-avatar.png
```

## Responsive Notes

The app has been tuned for:

- 320px mobile landing page
- 320px mobile applicants page
- 768px tablet landing page
- 1024px laptop applicants and landing layouts

When changing layout behavior, verify the app at these widths before shipping.

## Known Issues / Limitations

- The app uses mock/static data for applicants, pricing, categories, and common questions.
- Routing is handled client-side, so Vercel needs the included `vercel.json` rewrite for direct URLs like `/application`.
- Lighthouse scores can vary by device, network throttling, browser extensions, and whether the latest deployment is live.
