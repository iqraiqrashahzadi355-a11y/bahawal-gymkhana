# Bahawal Gymkhana — Website

A Next.js (App Router + TypeScript + Tailwind v4) website for **Bahawal Gymkhana**,
a real members-only heritage sports & social club in Bahawalpur, Pakistan (Google
Maps profile: 4.4★, 442 reviews) that currently has no website of its own.

Design system: "Heritage Athletic" — Espresso (#3E2723) + Mustard (#F2A93B),
Playfair Display + Plus Jakarta Sans. Created in Google Stitch, then hand-converted
into React/Tailwind components.

## Live Preview

https://bahawal-gymkhana.vercel.app/

## Screenshots

### Home
| Desktop | Mobile |
|---|---|
| ![Home Desktop](https://github.com/iqraiqrashahzadi355-a11y/bahawal-gymkhana/blob/393247e973e714ebb8200f51a83fbaa9ecf9efa8/Screenshots/bahawal-gymkhana.vercel.app%20Home%20pc.png) 
| ![Home Mobile](https://github.com/iqraiqrashahzadi355-a11y/bahawal-gymkhana/blob/fe1be0fc30223ce351b6c4e708ce6b44d30fcdc6/Screenshots/bahawal-gymkhana.vercel.app%20Home%20MOBILE.png) |

### Facilities
| Desktop | Mobile |
|---|---|
| ![Facilities Desktop](https://github.com/iqraiqrashahzadi355-a11y/bahawal-gymkhana/blob/393247e973e714ebb8200f51a83fbaa9ecf9efa8/Screenshots/bahawal-gymkhana.vercel.app-facilities%20PC.png) 
| ![Facilities Mobile](https://github.com/iqraiqrashahzadi355-a11y/bahawal-gymkhana/blob/393247e973e714ebb8200f51a83fbaa9ecf9efa8/Screenshots/bahawal-gymkhana.vercel.app-facilities%20mobile.png) |

### Gallery
| Desktop | Mobile |
|---|---|
| ![Gallery Desktop](Screenshots/bahawal-gymkhana.vercel.app-gallery%20PC.png) 
| ![Gallery Mobile](Screenshots/bahawal-gymkhana.vercel.app-gallery%20mobile.png) |

### Membership
| Desktop | Mobile |
|---|---|
| ![Membership Desktop](Screenshots/bahawal-gymkhana.vercel.app-membership%20PC.png) 
| ![Membership Mobile](Screenshots/bahawal-gymkhana.vercel.app-membership%20Moblie.png) |

### Reviews
| Desktop | Mobile |
|---|---|
| ![Reviews Desktop](Screenshots/bahawal-gymkhana.vercel.app-reviews%20PC.png) 
| ![Reviews Mobile](Screenshots/bahawal-gymkhana.vercel.app-reviews%20Mobile.png) |

### Contact
| Desktop | Mobile |
|---|---|
| ![Contact Desktop](Screenshots/bahawal-gymkhana.vercel.app-contact%20PC.png) 
| ![Contact Mobile](Screenshots/bahawal-gymkhana.vercel.app-contact%20mobile.png) |

### History
| Desktop | Mobile |
|---|---|
| ![History Desktop](Screenshots/bahawal-gymkhana.vercel.app-history%20pc.png) 
| ![History Mobile](Screenshots/bahawal-gymkhana.vercel.app-history%20mobile.png) |

### Terms & Policies
| Desktop | Mobile |
|---|---|
| ![Terms Desktop](Screenshots/bahawal-gymkhana.vercel.app-terms%20and%20polices%20PC.png) 
| ![Terms Mobile](Screenshots/bahawal-gymkhana.vercel.app-terms%20and%20polices%20mobile.png) |

## Pages (routing)
- `/` — Home
- `/facilities` — Tennis, squash, gym, pool, lawn, library, cigar room, snooker
  — with a working **filter tabs** + **booking modal** (pick a facility, pick a
  time, submit — hits the contact API)
- `/gallery` — Photo gallery with working **category filter tabs**, a working
  **lightbox** (click any "Enlarge" button), and a working **archive submission
  modal**
- `/membership` — Membership tiers + inquiry form; "Apply" buttons scroll to the
  form
- `/reviews` — Live search + filter over member reviews, plus a **"Write a Member
  Review" modal** with a working star picker, and a real Google Maps review link
- `/contact` — Full contact form + club info + map, side by side

## API endpoints
- `GET /api/reviews?sort=recent|highest|lowest` — returns rating breakdown + reviews
- `POST /api/contact` — accepts `{ name, email, phone, subject, message }`
  (also used by the facility booking modal and the gallery archive modal)
- `POST /api/membership` — accepts `{ fullName, phone, email, membershipType, proposer, message }`

Both POST routes validate required fields and return `{ success, message }` or
`{ success: false, error }`. In this demo they just log to the server console —
swap in a database or email service (e.g. Resend, Nodemailer) for production.

## Running locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Notes

- Google Fonts (Playfair Display, Plus Jakarta Sans, Material Symbols) load via
  `<link>` tags in `app/layout.tsx` — no build-time fetch required, works out of
  the box on Vercel.
- Colors, spacing, and typography are defined as a Tailwind v4 `@theme` in
  `app/globals.css`.
- Layout is desktop-first responsive: content is capped at 1280px and grids
  reflow from 1 column (mobile) up to 3–4 columns (desktop).
