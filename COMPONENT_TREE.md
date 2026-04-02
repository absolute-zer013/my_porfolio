# Component Tree

This document describes the full structure of the portfolio app — every component,
page, hook, context, and data export, and how they relate to each other.

---

## Tech Stack

| Layer        | Technology                               | Version | Purpose                                                         |
| ------------ | ---------------------------------------- | ------- | --------------------------------------------------------------- |
| UI Framework | [React](https://react.dev/)              | 19      | Component-based UI rendering                                    |
| Routing      | [React Router](https://reactrouter.com/) | 7       | Client-side navigation (SPA)                                    |
| Styling      | CSS Custom Properties                    | —       | Theme variables (dark/light), utility classes, component styles |
| Animations   | IntersectionObserver (native)            | —       | Scroll-triggered reveal via `useReveal` hook                    |
| Icons        | [simple-icons](https://simpleicons.org/) | 16      | Inline SVG brand icons in `SkillPill`                           |
| Build Tool   | [Vite](https://vite.dev/)                | 6       | Dev server + production bundler                                 |
| Language     | TypeScript (TSX)                         | 5.7     | React components and logic                                      |

---

## Project Structure

```
my_porfolio/
├── index.html                  # Vite entry HTML
├── vite.config.ts              # Vite + React plugin config
├── tsconfig.json               # TypeScript config
├── package.json
│
└── src/
    ├── main.tsx                # Entry point — router + providers, mounts into DOM
    ├── App.tsx                 # Home page layout: Navbar + sections + Footer
    ├── index.css               # Global styles, CSS theme variables, component classes
    ├── vite-env.d.ts           # Vite type declarations
    │
    ├── components/
    │   ├── Navbar.tsx          # Fixed header with section nav & theme toggle
    │   ├── Hero.tsx            # Intro section: bio, stat box, CTA buttons, photo placeholder
    │   ├── Skills.tsx          # Skill pills grid (delegates rendering to SkillPill)
    │   ├── SkillPill.tsx       # Single skill/tech tag with optional brand icon
    │   ├── Experience.tsx      # Clickable experience card grid
    │   ├── Projects.tsx        # Clickable project card grid (with screenshot placeholder)
    │   ├── Contact.tsx         # Contact info rows (email, WhatsApp, LinkedIn)
    │   ├── Footer.tsx          # Simple footer with name and role
    │   └── DetailHeader.tsx    # Fixed header for detail pages (back button + theme toggle)
    │
    ├── pages/
    │   ├── ExperiencePage.tsx  # Full experience detail: overview, outcomes, what I did, impact
    │   └── ProjectPage.tsx     # Full project detail: about, screenshots, features, stack, GitHub
    │
    ├── hooks/
    │   └── useReveal.ts        # Scroll-triggered reveal animation (IntersectionObserver)
    │
    ├── context/
    │   └── ThemeContext.tsx    # Light/dark theme state, persisted to localStorage
    │
    └── data/
        └── portfolio.ts        # All portfolio content & TypeScript interfaces
```

---

## Full Application Tree

```
index.html
└── <div id="root">                        ← React mounts here
    └── main.tsx
        └── BrowserRouter                  ← URL-based routing
            └── ThemeProvider              ← context/ThemeContext.tsx
                └── Routes
                    ├── /                  → App
                    ├── /experience/:slug  → ExperiencePage
                    └── /projects/:slug    → ProjectPage
```

---

## Route: `/` — Home Page

```
App                                        ← src/App.tsx
├── useReveal()                            ← hooks/useReveal.ts
├── Navbar                                 ← components/Navbar.tsx
│   ├── useTheme()                         ← context/ThemeContext.tsx
│   └── SECTIONS                          ← data/portfolio.ts
├── <main>
│   ├── Hero                              ← components/Hero.tsx
│   │   └── (static JSX, no sub-components)
│   ├── Skills                            ← components/Skills.tsx
│   │   └── skills[]                      ← data/portfolio.ts
│   │       └── SkillPill (×14)           ← components/SkillPill.tsx
│   ├── Experience                        ← components/Experience.tsx
│   │   └── experiences[]                 ← data/portfolio.ts
│   │       └── Link → /experience/:slug
│   ├── Projects                          ← components/Projects.tsx
│   │   └── projects[]                    ← data/portfolio.ts
│   │       └── Link → /projects/:slug
│   └── Contact                           ← components/Contact.tsx
│       └── contact                       ← data/portfolio.ts
└── Footer                                ← components/Footer.tsx
```

---

## Route: `/experience/:slug` — Experience Detail

```
ExperiencePage                             ← src/pages/ExperiencePage.tsx
├── useReveal()
├── DetailHeader (backTo="/#experience")  ← components/DetailHeader.tsx
│   ├── Link                              ← React Router
│   └── useTheme()
├── <main>
│   ├── Hero section                      — company, period, role, client
│   │   └── detail-hero-tags              — exp.techStack
│   │       └── SkillPill (className="exp-tag")
│   ├── Overview                          — exp.context paragraph
│   ├── Key Outcomes                      — exp.highlights[] metric cards
│   ├── What I Did                        — exp.detailedPoints[] bullet list
│   └── Impact                            — exp.outcome blockquote
└── Footer
```

Redirects to `/` if `:slug` has no match in `experiences[]`.

---

## Route: `/projects/:slug` — Project Detail

```
ProjectPage                                ← src/pages/ProjectPage.tsx
├── useReveal()
├── DetailHeader (backTo="/#projects")    ← components/DetailHeader.tsx
│   ├── Link
│   └── useTheme()
├── <main>
│   ├── Hero section                      — number, type, title, status, year
│   │   └── detail-hero-tags              — proj.techStack
│   │       └── SkillPill (className="exp-tag")
│   ├── About                             — proj.longDescription
│   ├── Screenshots                       — 3 placeholder slots (replace with real images)
│   ├── Features                          — proj.features[] bullet list
│   ├── Stack                             — proj.techStack[]
│   │   └── SkillPill (×n)
│   └── GitHub link                       — conditional on proj.link being non-empty
└── Footer
```

Redirects to `/` if `:slug` has no match in `projects[]`.

---

## Shared Components

| Component      | File                          | Used By                                   | What It Does                                                                                                                   |
| -------------- | ----------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `Navbar`       | `components/Navbar.tsx`       | `App`                                     | Fixed header; tracks active section on scroll; smooth-scrolls; theme toggle                                                    |
| `DetailHeader` | `components/DetailHeader.tsx` | `ExperiencePage`, `ProjectPage`           | Fixed header for detail pages — back-arrow link and theme toggle                                                               |
| `Footer`       | `components/Footer.tsx`       | `App`, `ExperiencePage`, `ProjectPage`    | Static footer: name and role label                                                                                             |
| `SkillPill`    | `components/SkillPill.tsx`    | `Skills`, `ExperiencePage`, `ProjectPage` | Renders a label with an optional brand icon from `simple-icons`; icon lookup is centralized in `ICON_MAP` inside the component |

---

## SkillPill — Icon Map

`SkillPill` contains a single `ICON_MAP` object that maps label strings to `simple-icons` slugs.
To add or change an icon for any skill or tech tag across the entire site, edit only this file.

Labels without an entry in `ICON_MAP` render as text-only pills (graceful fallback).

Current mappings:

| Label                                                       | Icon            |
| ----------------------------------------------------------- | --------------- |
| Flutter                                                     | siFlutter       |
| Dart                                                        | siDart          |
| React                                                       | siReact         |
| Vite                                                        | siVite          |
| Tailwind CSS                                                | siTailwindcss   |
| GraphQL                                                     | siGraphql       |
| GitHub Actions                                              | siGithubactions |
| Android / Android APK                                       | siAndroid       |
| iOS                                                         | siApple         |
| Play Store / Play Store Deployment                          | siGoogleplay    |
| Firebase / Firebase Deployment / Firebase Realtime Database | siFirebase      |
| Windows                                                     | siWindows       |

---

## Context Providers

| Provider        | File                       | Shares                                                                                                          |
| --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `ThemeProvider` | `context/ThemeContext.tsx` | `{ theme: "light" \| "dark", toggleTheme }` — persisted to `localStorage`, applied via `data-theme` on `<html>` |

---

## Custom Hooks

| Hook        | File                       | Used By                                | What It Does                                                                                   |
| ----------- | -------------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `useReveal` | `hooks/useReveal.ts`       | `App`, `ExperiencePage`, `ProjectPage` | Attaches `IntersectionObserver` to `.reveal` elements; adds `.revealed` class at 8% visibility |
| `useTheme`  | `context/ThemeContext.tsx` | `Navbar`, `DetailHeader`               | Returns `{ theme, toggleTheme }` from `ThemeContext`                                           |

---

## Data (`src/data/portfolio.ts`)

Single source of truth for all content. No data is hard-coded in components.

| Export        | Type           | Used By                        | Description                |
| ------------- | -------------- | ------------------------------ | -------------------------- |
| `SECTIONS`    | `string[]`     | `Navbar`                       | Section IDs for scroll nav |
| `skills`      | `string[]`     | `Skills`                       | 14 skill label strings     |
| `experiences` | `Experience[]` | `Experience`, `ExperiencePage` | 4 work experience entries  |
| `projects`    | `Project[]`    | `Projects`, `ProjectPage`      | 3 project entries          |
| `contact`     | `object`       | `Contact`                      | email, WhatsApp, LinkedIn  |

### `Experience` interface

```ts
interface Experience {
  name: string; // Company name
  title: string; // Short title shown on home card
  period: string; // e.g. "2022 – 2025"
  tag: string; // Tech badge summary for home card
  accentColor: string; // Hex color for accent bar and dots
  points: string[]; // Preview bullet points (home card)
  slug: string; // URL slug → /experience/:slug
  role: string; // Detailed role (detail page)
  client: string; // Client description (detail page)
  context: string; // Overview paragraph (detail page)
  detailedPoints: string[]; // Full bullet list (detail page)
  highlights: Highlight[]; // Key metric cards (detail page)
  techStack: string[]; // Tech tags rendered as SkillPill
  outcome: string; // Impact blockquote (detail page)
}
```

### `Project` interface

```ts
interface Project {
  title: string; // Project name
  type: string; // Category, e.g. "Desktop App · Personal Project"
  stack: string; // Tech summary string for home card
  num: string; // Display number ("01", "02", "03")
  description: string; // Short description for home card
  link: string; // GitHub or live URL (empty string = no link shown)
  slug: string; // URL slug → /projects/:slug
  longDescription: string; // Full description (detail page)
  features: string[]; // Feature bullet points (detail page)
  techStack: string[]; // Tech tags rendered as SkillPill (detail page)
  status: string; // "Shipped", "Live", etc.
  year: string; // Release year
}
```

### `Highlight` interface

```ts
interface Highlight {
  label: string; // Metric name, e.g. "Bugs Resolved"
  value: string; // Metric value, e.g. "50+"
}
```

---

## Styling (`src/index.css`)

All styles in a single file using CSS Custom Properties for theming.

**Theme switching:**

```css
:root              /* light theme defaults */
[data-theme="dark"] /* dark overrides — applied by ThemeProvider to <html> */
```

Key variables: `--bg`, `--bg-card`, `--text`, `--text-muted`, `--border`,
`--accent-warm`, `--accent-cool`, `--accent-grad`, `--skill-hover`

**Scroll animation classes** (driven by `useReveal`):

```
.reveal      → opacity: 0, translateY(20px)   initial hidden state
.revealed    → opacity: 1, translateY(0)       added when element enters viewport
.d1 / .d2 / .d3 → transition-delay: 80ms / 160ms / 240ms   stagger effect
```

**Shared layout classes:**

```
.container        max-width wrapper, horizontal padding
.section          vertical padding for each home section
.section-header   overline + h2 heading block
.skills-wrap      flex-wrap pill container (Skills section)
.skills-grid      flex-wrap pill container (ProjectPage Stack section — same layout)
.skill-pill       inline-flex pill with icon + label
.exp-tag          smaller inline-flex tag used in detail page hero bands
.card             base card styles (border, radius, padding, background)
.card-clickable   hover/active lift effect for linked cards
```

---

## Visual Summary

```
BrowserRouter
└── ThemeProvider .............. light/dark theme via CSS vars on <html>
    └── Routes
        ├── /  ................. App
        │                          Navbar
        │                          Hero · Skills · Experience · Projects · Contact
        │                          Footer
        ├── /experience/:slug .. ExperiencePage
        │                          DetailHeader
        │                          Hero · Overview · Key Outcomes · What I Did · Impact
        │                          Footer
        └── /projects/:slug .... ProjectPage
                                   DetailHeader
                                   Hero · About · Screenshots · Features · Stack · GitHub
                                   Footer
```
