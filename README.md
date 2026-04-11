# CyberDude Certificate Validation System (UI)

This repository contains the frontend UI for the CyberDude Certificate Validation System. It is designed as a professional, mobile-responsive verification page for recruiters to review internship certificate details and candidate status.

## Current Status

- UI is complete
- Data is displayed from a local sample dataset
- Backend integration is not yet implemented
- Firebase is planned for the next phase

## What This Page Shows

- Candidate Name
- Internship Role
- Certificate Verification Status (Valid / Not Valid)
- Joined Date & Completion Date
- Total Internship Duration
- GitHub & LinkedIn links
- Primary Tech Stack
- Key Projects
- Recommendation Status
- Professional Conduct / Standing

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- ESLint
- React Icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build and Production

Build the optimized production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Structure

- `app/page.tsx` — main page rendering the certificate verification UI
- `components/InternshipCertificate.jsx` — primary dashboard and UI components
- `assests/data.js` — sample candidate data for UI demonstration
- `app/globals.css` — global styling
- `next.config.ts` — Next.js configuration

## Next Phase

- Admin Panel
- Backend Integration
- Firebase authentication and data storage
- Live certificate lookup by unique verification ID

## Notes

- This UI is ready to receive backend data once integration begins.
- Update `assests/data.js` to change the sample candidate record displayed on the page.
- Run `npm run lint` to validate code quality.
