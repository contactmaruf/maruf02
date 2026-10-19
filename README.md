# Maruf Scale Labs — Interactive Single-Page Portfolio

A complete, production-ready, fully responsive single-page portfolio website for **Maruf Scale Labs**. Built with an editorial layout, clean typography, confident crimson red accents, and smooth interactive micro-animations.

---

## Brand & Aesthetic System

- **Primary Background**: Pure White (`#FFFFFF`)
- **Primary Text / Headings**: Near-Black (`#111111`)
- **Accent Color**: Bold Red (`#E53935`)
- **Secondary Background**: Very Light Gray (`#F5F5F5`)
- **Secondary Text**: Neutral Gray (`#666666`)
- **Borders & Dividers**: Soft Gray (`#E5E5E5`)

The design adheres to a strict 60-30-10 color budget where pure white dominates the canvas, near-black anchors the typography, and bold red accents highlight key interactive moments and focal points.

---

## Key Features

1. **Sticky Header & Section Spy**:
   - One-row navigation adhering to the top bar standard.
   - Smooth backdrop blur on scroll with active section tracking.
   - Accessible mobile drawer menu with smooth transition and Escape key handling.
   - Prominent red "Let's Talk" call to action.

2. **Hero Section**:
   - Oversized headline: *"Creative Ideas. Intelligent Solutions. Digital Impact."*
   - Interactive mouse-reactive pointer ambient illumination.
   - Geometric CSS framing elements that subtly respond to cursor coordinates.
   - Availability indicator: *"Available for select projects"*.
   - Direct CTAs to Portfolio and Contact sections.

3. **About Section**:
   - Two-column editorial manifesto with value statements:
     - *Creative by Design*
     - *Built with Technology*
     - *Focused on Impact*

4. **Services Grid**:
   - 4 interactive capability cards:
     - *Web Design & Development*
     - *AI-Powered Solutions*
     - *Motion Graphics & Video*
     - *Creative Content & Branding*
   - Subtle hover lifts, crimson border transitions, and animated arrow indicators.

5. **Selected Work (Portfolio)**:
   - Category filtering (All, Interactive Website, AI Creative Experiment, Motion Graphics, Digital Brand Experience).
   - High-fidelity visual concept previews.
   - Detailed project modal viewer with keyboard navigation (`Escape`), key innovations list, deliverables, and technology tags.
   - Transparently labeled as *Concept Project* / *Demo*.

6. **Interactive Desktop Cursor Follower**:
   - Lightweight custom circular follower with red outline.
   - Smooth spring interpolation.
   - Expands to "VIEW" pill when hovering project preview cards.
   - Disabled on touch devices and respects `prefers-reduced-motion`.
   - Uses `pointer-events: none` to never obstruct clicks or accessibility.

7. **Contact Section**:
   - Client-side validation with real-time feedback and error accessibility (`role="alert"`).
   - Direct studio contact card displaying `contact.maruf27@gmail.com` with one-click copy.
   - Generates formatted `mailto:` links with prefilled subject and message upon draft submission.

8. **Footer**:
   - Brand statement, quick jump links, verified channel indicators, dynamic year generation, and back-to-top button.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6+](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Getting Started

### 1. Prerequisites
- Node.js (version 18 or later recommended)
- npm or pnpm

### 2. Installation
Clone your repository or download the exported zip, then install dependencies:

```bash
npm install
```

### 3. Development Server
Start the local Vite development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your web browser.

### 4. Production Build
Compile TypeScript and bundle for production:

```bash
npm run build
```

The production assets will be output to the `dist/` directory.

You can preview the production build locally with:

```bash
npm run preview
```

---

## Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/), select **Add New Project** and import the repository.
3. Framework Preset: **Vite** (auto-detected).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository in [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, add `base: '/<repo-name>/'` if deploying to a subpath.
2. Use GitHub Actions with the standard Vite deployment workflow to deploy the `dist/` folder.

---

## Customizing Your Content

- **Portfolio Projects**: Edit `src/data/portfolioData.ts` to replace sample concepts with your real projects, case studies, and live links.
- **Images**: Add your project mockups or photography to `src/assets/images/` and reference them in `portfolioData.ts`.
- **Contact Details**: Update the studio email in `src/components/Contact.tsx`.
- **Social Media Links**: Replace placeholder channels in `src/components/Footer.tsx` and `src/components/Contact.tsx`.

---

## License

This project is licensed under the Apache 2.0 License.
