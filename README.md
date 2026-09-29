# NHL.dev — Personal Portfolio

> **Ngo Huu Loc (Nick)** · Full-Stack Engineer · UI/UX Craftsman · Systems Architect  
> Based in Khánh Hòa, Vietnam 🇻🇳

Live site: [https://portfolio-wheat-mu-vqz9640lrt.vercel.app](https://portfolio-wheat-mu-vqz9640lrt.vercel.app)

---

## Overview

Single-file, zero-dependency portfolio built as a Progressive Web App. No framework, no build step — pure HTML, CSS, and vanilla JS packed into one `index.html`.

---

## Features

- **4 themes** — Cyberpunk (default), Monochrome, Dracula, Catppuccin; persisted via `localStorage`
- **Live GitHub stats** — contributions heatmap, repo cards, and follower milestones pulled from public APIs
- **Interactive terminal** — type commands directly on the page (`help`, `about`, `projects`, `contact`, …)
- **DNA helix** — Three.js canvas showing people who shaped the builder
- **Lottie animations** — hero, mid-section, and contact illustrations
- **Smooth scrolling** — Lenis + GSAP ScrollTrigger reveal animations
- **Custom cursor** — magnetic dot + ring
- **Achievements panel** — unlockable easter eggs
- **/now page** — current focus, what I'm reading, what I'm learning
- **/uses page** — full gear and toolchain list
- **PWA** — installable, offline-capable via service worker (network-first for HTML, cache-first for assets)

---

## Tech Stack (what's on the page)

| Layer | Tools |
|---|---|
| Systems & Low-Level | C, C++17/20, Python 3, PHP, Win32 API, WSL2, WebAssembly, LLVM/Clang, CMake/Ninja, Electron, pybind11 |
| Frontend | HTML5, CSS3, JavaScript, TypeScript, Next.js, Nuxt, Vue.js, Svelte, Astro, Remix, Angular, NestJS, Tailwind, SCSS, Vite, Pinia |
| Backend & Infra | FastAPI, Supabase, Firebase, MongoDB, PostgreSQL, MySQL, Redis, Prisma, Drizzle, BullMQ, Nginx, Appwrite |
| APIs & Real-time | REST, WebSocket, gRPC, tRPC, Socket.io, JWT, RxJS, IndexedDB |
| AI & Data | ONNX Runtime, NumPy, Pandas, scikit-learn, Claude API, ChatGPT, Groq, DeepSeek, Anaconda |
| Toolchain | Git, GitHub Actions, Netlify, Vercel, npm, VS Code, Laragon |

---

## Project Structure

```
portfolio/
├── index.html       # Everything — markup, styles, scripts
├── manifest.json    # PWA manifest
├── sw.js            # Service worker (v3)
├── package.json     # Name/version only, no dependencies
├── vercel.json      # Deployment config
├── icon-96.png
├── icon-192.png
└── icon-512.png
```

---

## Deployment

Hosted on **Vercel**. Push to main → auto-deploy. No build command needed.

```bash
# Clone and serve locally (any static server works)
npx serve .
# or
python -m http.server 8080
```

---

## GitHub Journey

| Date | Milestone |
|---|---|
| 11 May 2025 | Joined GitHub — Day 0 |
| 27 Mar 2026 | 100 repos shipped (10 months) |
| 20 Apr 2026 | 100 followers |
| 23 May 2026 | 150 repos |
| 02 Jun 2026 | 200 followers |
| 30 Jun 2026 | 300 followers |
| 12 Aug 2026 | 350 followers |
| 28 Aug 2026 | **400 followers — 15 months in** |

~27 followers/month average. Still accelerating.

---

## Contact

| Channel | Link |
|---|---|
| Email | benhan871986@gmail.com |
| GitHub | [@d4vucat](https://github.com/d4vucat) |
| Discord | [d4vucat](https://discord.com/users/d4vucat) |
| Reddit | [u/Kooky-Elevator1766](https://www.reddit.com/user/Kooky-Elevator1766/) |

---

> *"I think it is absolutely possible for an ordinary person to choose to become extraordinary."*
