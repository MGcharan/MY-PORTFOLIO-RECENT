# Giricharan — Portfolio

A modern, animated portfolio for Giricharan, MERN Stack Developer.
Built with React, Vite, Tailwind CSS, Framer Motion, and AOS.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production-ready files are output to the `dist/` folder. Deploy that
folder to Netlify, Vercel, or any static host.

## Sections

- Hero (with background video)
- About
- Expertise
- Skills
- Projects
- Contact (sends email via EmailJS)
- Footer

## Editing content

- Text & links: files in `src/components/`
- Projects: edit the `projects` array in `src/components/Projects.jsx`
- Profile photo: `src/assets/about/profile.jpg`
- Resume: `public/Giricharan-Resume.pdf`
- Hero background reel: `src/assets/hero video/herovideo.mp4`

## Replacing the intro voice with your own recording

The hero "Play Intro" button plays `public/intro-greeting.mp3` (a synthetic
male voice). To use your own voice instead:

1. Record yourself saying the greeting on your phone (Voice Memos, etc.).
2. Export it as an MP3 named `intro-greeting.mp3`.
3. Replace the file at `public/intro-greeting.mp3` with your recording.

No code changes needed — keep the same filename and it will just work.
