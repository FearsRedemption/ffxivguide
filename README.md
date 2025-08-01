# 🧙 FinalFXIV – Internal Guide Platform

**FinalFXIV** is a custom-built React + TypeScript web platform that delivers detailed Final Fantasy XIV job, dungeon, raid, and FC content using a fully modular, component-based architecture. Inspired by early Readdy.ai designs, the project is now rebuilt with a modern, maintainable codebase using Vite, TailwindCSS, and a scalable folder system.

---

## ⚙️ Tech Stack

- ⚛️ React 18 + TypeScript  
- ⚡ Vite for bundling and dev server  
- 💨 Tailwind CSS v4 (utility-first, dark/light mode support)  
- 🔁 React Router DOM (clean route-based navigation)  
- 📬 Contact and application forms (hook + context managed)  
- 🌘 Dark mode toggle system  
- 🌐 GitHub Pages hosting with custom domain + fallback routing

---

## 📁 Project Structure (July 2025)

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

## ✅ Current Features

- Responsive layout with theme toggle (light/dark)
- Job guide system using centralized data and skill rotation blocks
- Home page, job overview, job detail pages with metadata and icons
- Personal Free Company landing page with upcoming event system
- FC application and contact forms using context + hook architecture
- Featured video guide carousel system with metadata
- GitHub Pages routing with clean `/job/paladin`-style URLs
- Visual parity with original design prototypes, now React-native

---

## 📌 Todo / In Progress

- ⚔ **Combat Guides** (dungeons, raids, trials) — full guide system
- 💰 **Gil Marking Guide** (farming, retainers, markets)
- 🔨 **Crafting/Gathering Guides** (rotations, node tracking, tooltips)
- 🏡 **Housing and Glamour Guides** (decoration, fashion, layout tools)
- 🖼 **Skill Icon Collection** — bulk skill icon imports still pending
- 📸 **FC Member Scraping Tool** — planned scraping of official site data
- 🔐 **Backend Access Gating** — custom login + register, gated content, access code unlock for donations ≥ $5.00

---

## 🔒 Deployment & Hosting Notes

- Hosted via GitHub Pages using a custom domain: [https://finalfxiv.com](https://finalfxiv.com)
- Uses `BrowserRouter` with a `404.html` fallback to support clean routes
- Skill images and guide data resolved using `import.meta.url` for Vite compatibility
- Backend integration planned but not exposed in this frontend repo

---

## ⚠️ Licensing & Use

This project is **private and proprietary**.  
Do **not** clone, reuse, or distribute any part of this codebase or its assets without explicit permission.

Final Fantasy XIV is © SQUARE ENIX CO., LTD.  
This site is an independent fan creation and is not affiliated with Square Enix.

---

## 🔗 Live Preview

Staging site:  
🌐 [https://test.finalfxiv.com](https://test.finalfxiv.com)

Production launch:  
🌐 [https://www.finalfxiv.com](https://www.finalfxiv.com)

---
