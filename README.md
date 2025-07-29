# 🧙 FinalFXIV – Internal Guide Platform

**FinalFXIV** is a privately owned and internally developed React + TypeScript web application for delivering Final Fantasy XIV job, dungeon, and raid content.

It is visually inspired by an earlier prototype built on Readdy.ai, but all functionality is now being rebuilt in modular React components with a Vite + Tailwind CSS pipeline. No dependencies on third-party web builders remain.

---

## ⚙️ Tech Stack

- ⚛️ React 18 with TypeScript  
- ⚡ Vite build system  
- 💨 Tailwind CSS v4 (utility-first styling)  
- 🔁 React Router DOM (clean, hash-free URLs)  
- 🔐 Access gating system for early content  
- 📬 Email form system (currently integrated with an external endpoint)  
- 🌐 Hosted via GitHub Pages using a custom domain  

---

## 🔒 Deployment Notes

This is a private project and not intended for cloning or reuse.

- `BrowserRouter` is used to enable clean URLs (e.g., `/home`, `/login`)  
- A `404.html` is included to enable client-side routing via redirect fallback  
- `RedirectHandler.tsx` handles those redirects on app mount  
- Readdy.ai elements are being phased out and replaced with fully React-driven logic  

---

## 📁 Project Structure Overview

```txt
ffxivguide/
├── public/
│   ├── 404.html               # GitHub Pages SPA redirect fallback
│   └── favicon.ico            # Optional site icon
│
├── src/
│   ├── components/            # Reusable UI components (e.g., RedirectHandler)
│   ├── context/               # Global state providers (AccessProvider, SubscriptionProvider)
│   ├── hooks/                 # Custom hooks for shared logic
│   ├── pages/                 # Route views like ComingSoon, Home, NotFound
│   ├── styles/                # Tailwind base + global CSS (index.css)
│   ├── App.tsx                # Main routing structure with <Routes>
│   ├── main.tsx               # App entry point (ReactDOM, BrowserRouter, Providers)
│   └── vite-env.d.ts          # Vite type declarations
│
├── index.html                 # Vite root HTML (loaded on all routes)
├── package.json               # Project metadata and scripts
├── tailwind.config.cjs        # Tailwind v4 config (CJS)
├── tsconfig.json              # TypeScript compiler config
├── tsconfig.node.json         # TS config for Vite's dev server
├── vite.config.ts             # Vite config (base path, plugins, etc.)
└── README.md                  # Project overview and internal documentation
```

---

## ✅ Current Features

- "Coming Soon" page layout fully ported to React  
- Fully responsive layout using Tailwind v4  
- Early access system for donors and testers  
- Email capture form (currently connected to third-party form endpoint)  
- GitHub Pages deployment with clean URL routing  
- Structured route pages (e.g., `/home`, `/job/:jobName`, `/register`)  

---

## 🧱 Migration Status

- ✅ Readdy.ai visuals reimplemented using React components  
- ✅ GitHub Pages routing fully working  
- 🚧 Email & access backend will eventually be replaced with a custom API  
- 🚧 Guide content pages under construction  
- 🚧 Authentication and gated content in planning  

---

## ⚠️ Licensing & Use

This project is proprietary.  
Do **not** clone, distribute, or reuse code or branding without explicit permission.  
Final Fantasy XIV is © SQUARE ENIX CO., LTD. and this site is not affiliated with them.

---

## 🔗 Internal Preview

Live Site (custom domain):  
[https://test.finalfxiv.com](https://test.finalfxiv.com)

Admin or backend access not exposed publicly. Contact the project owner for access.
