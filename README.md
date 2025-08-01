# 🧙 FinalFXIV – Internal Guide Platform

**FinalFXIV** is a fully custom-built React + TypeScript web platform for delivering curated Final Fantasy XIV content. From job guides and dungeon strategies to Free Company tools and themed UI elements, the site emphasizes clarity, speed, and extensibility—offering a polished fan experience for players and community members alike.

---

## ⚙️ Tech Stack

- ⚛️ React 18 with TypeScript  
- ⚡ Vite (fast bundling, native ESM)  
- 💨 Tailwind CSS v4 (utility-first with dark/light mode support)  
- 🔁 React Router DOM (SPA routing with clean URLs)  
- 🧠 Global state via Context + custom Hooks  
- 🌐 Deployed with GitHub Pages and custom domain  
- 📬 Email forms integrated with a secured backend  
- 🔒 Route fallback and redirect logic for smooth SPA navigation  

---

## 📁 Project Structure

```txt
src/
├── assets/
│   └── images/
│       ├── classes/
│       │   ├── DPS.png
│       │   ├── Filtered.png
│       │   ├── Healer.png
│       │   ├── Magical Ranged DPS.png
│       │   ├── Melee DPS.png
│       │   ├── Physical Ranged DPS.png
│       │   └── Tank.png
│       ├── fc-members/
│       │   ├── juneko.png
│       │   ├── visenyaa.png
│       │   └── whisper.png
│       ├── job-hero/
│       │   ├── Astrologian.png ... WhiteMage.png
│       ├── job-icon/
│       │   ├── Astrologian.png ... White Mage.png
│       ├── skills/
│       │   ├── astrologian/
│       │   ├── bard/
│       │   ├── blackmage/
│       │   └── ... (includes all jobs: reaper, viper, pictomancer, etc.)
│       ├── crafter-guide.png
│       ├── crystal-background.jpg
│       ├── donator.png
│       ├── Featurerequest1_Icon.png
│       ├── final ffxiv purple.png
│       ├── free user.png
│       ├── juni.png
│       ├── lodestone me.jpg
│       ├── Main Scenario.png
│       ├── newsletter.jpg
│       ├── Subscribed User.png
│       ├── ultimate-raid-guide.png
│       ├── vice pres.jpg
│       ├── zone-guide.png
│       └── react.svg
│
├── components/
│   ├── battleguide/
│   │   ├── AllJobCard.tsx
│   │   └── JobCategorySection.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   ├── ContactInfo.tsx
│   │   └── FAQSection.tsx
│   ├── home/
│   │   ├── Community.tsx
│   │   ├── FeaturedGuides.tsx
│   │   ├── FreeCompanyCard.tsx
│   │   ├── GilMaking.tsx
│   │   ├── GuideCard.tsx
│   │   ├── HeroSection.tsx
│   │   ├── JobCard.tsx
│   │   ├── JobGuides.tsx
│   │   ├── QuickAccess.tsx
│   │   ├── SupportCard.tsx
│   │   └── ToolCard.tsx
│   ├── personalfc/
│   │   ├── BenefitCard.tsx
│   │   ├── FCAchievements.tsx
│   │   ├── FCActivities.tsx
│   │   ├── FCActivitiesCalendar.tsx
│   │   ├── FCApply.tsx
│   │   ├── FCBenefits.tsx
│   │   ├── FCHero.tsx
│   │   ├── FCMembers.tsx
│   │   ├── FCOverview.tsx
│   │   ├── FCRecruitment.tsx
│   │   ├── FCSectionNav.tsx
│   │   ├── RoleCard.tsx
│   │   └── UpcomingEvents.tsx
│   ├── privacy/
│   │   ├── DataRightsGrid.tsx
│   │   ├── InfoGrid.tsx
│   │   ├── LegalComplianceSection.tsx
│   │   ├── PolicyUpdatesSection.tsx
│   │   └── SecurityContactGrid.tsx
│   └── tos/
│       ├── TermsOverview.tsx
│       └── WebsiteUsage.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PageHeader.tsx
│   └── RedirectHandler.tsx
│
├── context/
│   ├── AccessContext.tsx
│   ├── ContactFormContext.tsx
│   ├── FCApplyFormContext.tsx
│   └── SubscriptionContext.tsx
│
├── data/
│   ├── allJobsData.ts
│   ├── fcAchievementsData.ts
│   ├── fcEventsData.ts
│   ├── fcMembersData.ts
│   ├── featuredGuidesData.ts
│   ├── gilToolsData.ts
│   ├── jobGuideData.ts
│   └── jobGuidesData.ts
│
├── hooks/
│   ├── useAccess.ts
│   ├── useContactForm.ts
│   ├── useDarkMode.ts
│   ├── useFCApplyForm.ts
│   ├── useServerStatus.ts
│   └── useSubscription.ts
│
├── pages/
│   ├── AllJobs.tsx
│   ├── ComingSoon.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── JobGuidePage.tsx
│   ├── Login.tsx
│   ├── NotFound.tsx
│   ├── PersonalFreeCompany.tsx
│   ├── PrivacyPolicy.tsx
│   ├── Register.tsx
│   └── TermsOfService.tsx
│
├── styles/
│   └── index.css
│
├── types/
│   └── JobGuideContent.ts
│
├── utils/
│   └── slugify.ts
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

---

## ✅ Key Features

- 📘 **Modular Job Guides**  
  Job-by-job breakdowns with difficulty ratings, unlock levels, prerequisites, rotation steps, and skill icons. All content is structured using data-driven React components.

- 🏘 **Free Company Hub**  
  Dedicated FC features include an event calendar, member showcase, and an application form for prospective recruits.

- 🖼 **Light/Dark Mode**  
  Theme toggle implemented using `useDarkMode` with centralized Tailwind support via `index.css`.

- 🔍 **Search & Filtering**  
  Overview pages for jobs and content include role-based filtering and difficulty sorting.

- 📺 **Featured Video Guides**  
  Hand-picked guide videos with thumbnails, metadata, and performance tags displayed in a responsive carousel.

- 📬 **Forms with Hook Context**  
  Contact and FC applications powered by `useContactForm`, `useFCApplyForm`, and `useSubscription`, with validation and state tracking via context.

- 🚦 **Live Server Status Hook**  
  Simple world status checker using `useServerStatus` with color-coded display.

- 📦 **Static Asset Resolution**  
  Skill icons, banners, and images resolved via `import.meta.url` to support clean builds and relative imports.

- 🧭 **404 Support + Redirects**  
  `404.html` + `RedirectHandler.tsx` enable proper client-side routing for all GitHub Pages routes.

---

## 📌 In Progress

- ⚔ **Combat Guides** – Dungeon, raid, and trial breakdowns  
- 💰 **Gil Making Tools** – Marketboard tips, retainers, and farming routes  
- 🔨 **Crafting/Gathering** – Rotations, node maps, and specialist tips  
- 🏡 **Housing & Glamour** – Decorating guides, creative fashion ideas  
- 🖼 **Skill Icon Completion** – Ongoing import of missing icons into the `/skills` folder  
- ⚙️ **Additional Form Backends** – Future integration of enhanced secure endpoints

---

## 🔒 Deployment Notes

- All routing is handled via `BrowserRouter`  
- SPA-friendly fallback is handled with `404.html` + redirect logic  
- Public deployment is handled through GitHub Pages using a CNAME record  
- Environment-specific logic is abstracted from this frontend repo  

---

## ⚠️ Licensing & Usage

This is a private project.  
Do **not** clone, reuse, or redistribute any part of this repository or its contents without explicit permission.

**Final Fantasy XIV** is © SQUARE ENIX CO., LTD.  
This site is an independent fan project and is not affiliated with or endorsed by Square Enix.

---

## 🔗 Live Preview

- Staging: [https://test.finalfxiv.com](https://test.finalfxiv.com)  
- Production: [https://www.finalfxiv.com](https://www.finalfxiv.com)  

---
