# Fahmi Thajudeen — Developer Portfolio

A clean, minimal personal portfolio website for **Fahmi Thajudeen**, a Flutter & React Developer based in Malaysia. Built with React + TypeScript + Vite, featuring dark mode, scroll-reveal animations, and a fully component-based architecture.

---

## 🚀 Getting Started

```bash
pnpm install   # Install dependencies
pnpm dev       # Start dev server
pnpm build     # Build for production
```

---

## 📁 Project Structure

```
fahmi-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky nav + dark mode toggle
│   │   ├── Hero.tsx          # Landing section with bio and CTAs
│   │   ├── Skills.tsx        # Skills pill grid
│   │   ├── Experience.tsx    # Work experience cards
│   │   ├── Projects.tsx      # GitHub project cards
│   │   ├── Contact.tsx       # Contact links (email, WhatsApp, LinkedIn)
│   │   └── Footer.tsx        # Footer
│   ├── context/
│   │   └── ThemeContext.tsx  # Dark/light mode state + localStorage
│   ├── data/
│   │   └── portfolio.ts      # All content (skills, experience, projects)
│   ├── App.tsx               # Root component + scroll reveal hook
│   └── index.css             # Global styles + CSS theme variables
├── index.html
├── bundle.html               # Self-contained production bundle
└── README.md
```

---

## ✨ Features

- **Dark / Light mode** — toggle in navbar, persisted in localStorage, respects system preference on first visit
- **Scroll-reveal animations** — sections fade in on scroll via IntersectionObserver
- **Responsive** — adapts to mobile and tablet
- **Data-driven** — all content lives in `src/data/portfolio.ts` for easy updates
- **Single-file bundle** — `bundle.html` is self-contained and ready for any static host

---

## 🛠️ Skills Used to Build This Project

This portfolio was built with guidance from three design and development skills:

---

### 1. 🎨 `/brand-guidelines`

The **brand-guidelines** skill provides a structured approach to visual identity — covering color palettes, typography pairings, and spacing systems that produce a cohesive look and feel.

**Applied here:**
- A **warm, restrained color palette** was chosen (`#f7f5f0` background, `#1a1a18` text) inspired by the principle of using a dominant base with sharp accents rather than timid, evenly distributed colors
- **Accent colors** (`#c8a882` warm sand, `#8ba5b8` cool slate, `#9baa8c` sage) are used sparingly — only on dots, gradients, and stat numbers — following the principle that accents earn their place
- The **dark mode palette** (`#141412` background, `#f0ede6` text) mirrors the same proportions and accent colors, preserving brand consistency across both themes

---

### 2. 🖼️ `/canvas-design`

The **canvas-design** skill guides the creation of visually distinctive interfaces — focusing on spatial composition, typography, motion, and atmosphere rather than defaulting to generic layouts.

**Applied here:**
- **Typography pairing**: `DM Serif Display` (editorial serif for headings) paired with `DM Sans` (geometric humanist sans for body) — chosen for character rather than defaulting to Inter or Roboto
- **Spatial composition**: Asymmetric hero layout with a dot-pattern stat block, uppercase overline labels, and generous whitespace — the layout communicates hierarchy before a word is read
- **Motion**: Scroll-reveal animations use a spring cubic-bezier curve (`cubic-bezier(.22,.68,0,1.2)`) for a natural feel, with staggered delays (`d1`–`d3`) so elements cascade in rather than all appearing at once
- **Hover micro-interactions**: Cards lift on hover, project cards reveal a gradient underline bar, contact rows slide right — each interaction is purposeful and consistent

---

### 3. 🧱 `/web-artifacts-builder`

The **web-artifacts-builder** skill provides a React + TypeScript + Vite + Tailwind CSS + shadcn/ui scaffold with a bundling pipeline that compiles everything into a single, self-contained HTML file.

**Applied here:**
- **Project scaffold**: Initialized with `init-artifact.sh`, which set up `@/` path aliases, Tailwind CSS 3, and 40+ shadcn/ui components out of the box
- **Component architecture**: Instead of one monolithic file, the project is split into focused components, a `ThemeContext` for dark mode state, and a `data/` layer for content — making it easy to update or extend
- **Bundle pipeline**: `bundle-artifact.sh` uses Parcel + html-inline to compile the entire React app into a single `bundle.html` (~209 KB) — ready to deploy to Firebase, GitHub Pages, or Netlify with zero extra config

---

## 🌐 Deployment

```bash
# Firebase Hosting
firebase deploy

# GitHub Pages — push bundle.html and enable GitHub Pages in repo settings

# Open locally
open bundle.html
```

---

## 📬 Contact

**Fahmi Thajudeen**
- Email: mfahmitj13.iu@gmail.com
- WhatsApp: +60 13-596 6001
- LinkedIn: [linkedin.com/in/mfahmitj13](https://www.linkedin.com/in/mfahmitj13/)
