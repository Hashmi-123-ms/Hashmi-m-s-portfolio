# Hashmi M S — Portfolio

Personal portfolio website (HTML + CSS + JavaScript, no build step).

## Features
- Dark / light mode toggle (remembers your choice)
- Typing animation, scroll-reveal, floating illustrated avatar, animated counters
- Fully mobile-friendly with a slide-in menu
- One-click **Download CV** (`assets/Hashmi_MS_Resume.pdf`)

## Structure
```
portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── avatar.svg
    └── Hashmi_MS_Resume.pdf
```

## Before you publish
In `index.html`, replace the two placeholders:
- `https://github.com/YOUR-GITHUB-USERNAME`
- `https://www.linkedin.com/in/YOUR-LINKEDIN-ID`

To update the CV later, replace `assets/Hashmi_MS_Resume.pdf` with a new file of the same name.

## Deploy (GitHub + Vercel)
1. Create a new public repo on GitHub (e.g. `portfolio`).
2. Upload all files (keep the `assets` folder) and commit.
3. Go to vercel.com → **Add New → Project** → import the repo.
4. Framework Preset: **Other**. Leave build settings empty → **Deploy**.
5. Every future push to `main` redeploys automatically.
