# Job Tracker

A Next.js + Prisma demo app for managing job applications, interviews, and hiring progress. This project is built with a modern frontend UI using Tailwind CSS, Radix-based components, and a SQLite-backed Prisma data layer.

---

## Project Overview

`Job Tracker` is a landing page / marketing homepage for a job application tracking web app. It includes:

- A **hero section** for the marketing experience
- A **plans section** with pricing / plan cards
- A **footer** with branding and copyright
- A **Prisma-backed data layer** for job application records

The app is structured to show both static marketing content and the foundations for a logged-in application flow.

---

## Key Features

- Responsive hero section with strong visual hierarchy
- CTA buttons for onboarding & pricing
- Plan cards that describe product tiers
- Dark-mode-friendly color palette
- SQLite + Prisma integration for job records
- Server actions to fetch job data from the database

---

## Repository Structure

```text
.
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── (marketing)/
│   │   └── page.tsx
│   ├── (app)/
│   │   ├── app/page.tsx
│   │   ├── account/page.tsx
│   │   └── app/jobs/[id]/page.tsx
│   └── api/
│       └── auth/
├── components/
│   ├── Logo.tsx
│   ├── JobsItems.tsx
│   └── HomePage/
│       ├── FooterSection.tsx
│       ├── HeroSection/
│       │   ├── HeroSectionLeftContent.tsx
│       │   ├── HeroSectionRightContent.tsx
│       │   └── heroSection.tsx
│       ├── PlanSection/
│       │   ├── PlanCard.tsx
│       │   └── PlanSection.tsx
│       └── navBarSection/
│           ├── navBar-Bts.tsx
│           └── navBar.tsx
├── app/lib/
│   ├── actions.ts
│   ├── db.ts
│   └── types.ts
└── public/
```

---

## App Details

### `app/(marketing)/page.tsx`
This is the marketing homepage entry point. It renders the `HomePage` layout with:
- `NavBar`
- `HeroSection`
- `PlanSection`
- `FooterSection`

### `app/layout.tsx`
Sets the global layout for the application, including:
- loading `globals.css`
- loading `Geist` fonts from `next/font/google`
- wrapping all pages in a `body` element with `min-h-full flex flex-col`

### `app/globals.css`
Contains:
- theme variables and color palette
- base typography and selection styles
- responsive hero/section/footer layout styles
- button and card styling patterns

### `components/HomePage/` structure

#### `navBar.tsx`
Builds the top navigation with:
- `Logo`
- `Login` / `Sign Up` buttons

#### `HeroSection/`
- `heroSection.tsx` — parent section wrapper
- `HeroSectionLeftContent.tsx` — main hero copy, CTA, and highlight list
- `HeroSectionRightContent.tsx` — carousel preview area

#### `PlanSection/`
- `PlanSection.tsx` — section wrapper
- `PlanCard.tsx` — individual plan card with title, description, and CTA

#### `FooterSection.tsx`
Simple footer branding and copyright.

---

## Data Layer

### `prisma/schema.prisma`
Defines the database models used by the application:

- `User`
  - stores user metadata
  - relation to `JobItem`
- `JobItem`
  - stores job application details (company, position, status, tags, salary, description)
- `Plan`
  - stores subscription or pricing plan metadata
  - includes `features` as a string array

### `app/lib/db.ts`
Initializes Prisma with the `better-sqlite3` adapter for SQLite.
It uses `DATABASE_URL` from environment variables or defaults to `file:./dev.db`.

### `app/lib/actions.ts`
Contains server-side actions used by the app.
Example:
- `getJobs()` fetches job records from `db.jobItem.findMany()` sorted by creation date.

### `app/lib/types.ts`
Defines frontend TypeScript types such as `JobItem` to help keep component props consistent.

---

## Routes and Pages

### Marketing page
- `app/(marketing)/page.tsx`
  - renders the homepage marketing experience

### App routes
- `app/(app)/app/page.tsx`
  - currently renders a simple dashboard card and fetches jobs via `getJobs()`
- `app/(app)/account/page.tsx`
  - placeholder page for user account flow
- `app/(app)/app/jobs/[id]/page.tsx`
  - placeholder page for job detail route

### API
- `app/api/auth/`
  - placeholder folder for auth API routes

---

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:3000
```

---

## Database and Prisma

### Generate Prisma client

```bash
npx prisma generate
```

### Run database seed

```bash
npx prisma db seed
```

### Inspect schema

- `prisma/schema.prisma` defines the models
- output client is generated to `app/generated/prisma`

---

## Notes and Improvements

### Current implementation
- The app is mostly a marketing homepage with a hero, plans, and footer
- There is a data layer available for job tracking, but the app routes are still in early development
- The components are mostly UI-driven with Tailwind utility classes

### Suggested next steps
- Add real job listing pages and account/auth flow
- Wire `PlanCard` and pricing details to real plan data
- Use `app/api/auth` for login/signup endpoints
- Build `JobItem` detail view under `app/(app)/app/jobs/[id]/page.tsx`

---

## Useful Files

- `app/layout.tsx` — global app layout and font registration
- `app/globals.css` — global styles and responsive design rules
- `prisma/schema.prisma` — database schema and models
- `app/lib/db.ts` — Prisma database client setup
- `app/lib/actions.ts` — server-side data access actions
- `app/components/HomePage/HeroSection/` — hero content and preview display
- `app/components/HomePage/PlanSection/` — plan cards and pricing section

---

## Dependencies

- `next` — React framework for server rendering and routing
- `react` / `react-dom` — UI library
- `tailwindcss` — styling system
- `prisma` / `@prisma/client` — ORM and database client
- `better-sqlite3` adapter — SQLite integration for Prisma
- `shadcn` / `radix-ui` — UI primitives and components
- `embla-carousel-react` — carousel previews in the hero section

---

## Environment

The app supports a local SQLite database via `process.env.DATABASE_URL`.
You can use `.env` / `.env.example` to set the DB location.

