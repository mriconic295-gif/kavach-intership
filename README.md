# KAVACH Internship Platform — React + Tailwind

Premium cybersecurity internship front-end with working client-side navigation and dedicated pages.

## Included
- Home with the supplied pixelated winter wallpaper: `public/assets/home-wallpaper.jpg`
- 5-second intro poster with Skip Intro
- About / Trainer page
- Trainer photo upload + logo upload (stored in browser localStorage)
- Programs catalog
- Dedicated detail page for every course
- Dedicated learning module workspace for every course
- Module completion saved in localStorage
- Process page
- Application form + demo success state
- Student Portal
- Mentor Portal
- Admin Portal
- Portal sub-pages for tasks, reviews, calendar and applications
- Fixed 3-button page navigation: previous / K-home / next
- Responsive mobile navigation
- Off-white editorial visual system with shadows and effects

## Run
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Branding
Open `/about` to upload the official KAVACH logo and trainer photo. The browser remembers these selections with localStorage.

## Backend note
Authentication, database, role-based access, application persistence and file storage are intentionally front-end/demo integrations. Connect Supabase/Firebase/your API before production.

## Verification note
The source was checked for route coverage and project structure. The environment available for this build could not complete `npm install` because external package resolution timed out, so a local Vite production build could not be executed here. Run `npm install && npm run build` locally or in Vercel to perform the final dependency/build check.
