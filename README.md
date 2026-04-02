# Fahmi Thajudeen — Developer Portfolio

A clean, minimal personal portfolio website for **Fahmi Thajudeen**, a Flutter & React Developer based in Malaysia. Built with React + TypeScript + Vite, featuring dark mode, scroll-reveal animations, and a fully component-based architecture.

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

## 📬 Contact

**Fahmi Thajudeen**

- Email: mfahmitj13.iu@gmail.com
- WhatsApp: +60 13-596 6001
- LinkedIn: [linkedin.com/in/mfahmitj13](https://www.linkedin.com/in/mfahmitj13/)
