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

src/
├─ components/ # Shared logic and visuals (e.g., RedirectHandler)
├─ context/ # Access and subscription state providers
├─ hooks/ # Abstracted custom hooks
├─ pages/ # Route views (ComingSoon, Home, etc.)
├─ styles/ # Global CSS + Tailwind layer
├─ App.tsx # Route configuration
├─ main.tsx # App bootstrap
public/
├─ 404.html # GitHub Pages SPA fallback


---

## ✅ Current Features

- "Coming Soon" page layout fully ported to React  
- Fully responsive layout using Tailwind v4  
- Early access system for donors and testers  
- Email capture form (currently connected to third-party form endpoint)  
- GitHub Pages deployment with clean URL routing  
- Structured route pages (e.g., `/home`, `/jobs/:jobName`, `/register`)  

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
