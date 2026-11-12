# ⚡ KRITI PRIYA — Ultra-Modern 3D Developer Portfolio https://kriti-portfolio-nine.vercel.app/

> An award-winning, Awwwards-tier interactive 3D web portfolio engineered with **React 18**, **Three.js**, **React Three Fiber (R3F)**, **Drei**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Key Highlights & Capabilities ($1000+ Quality)

1. **Interactive 3D WebGL Canvas (`Hero3D.jsx`)**:
   - Real-time procedural cyber core with distort shaders and rotating quantum wireframe gyroscopes.
   - 450+ interactive starfield and constellation particles reacting to cursor parallax.
   - Orbiting holographic skill spheres in 3D coordinate space.
   - 60 FPS hardware-accelerated rendering with fallback compatibility.

2. **Dual-Mode Interactive Shell (`AboutInteractive.jsx`)**:
   - **Visual Story View**: Rich bento presentation of Kriti's journey across Sandip University, Codec Technologies, and JEE Mains qualification.
   - **Interactive Developer CLI (`kriti@portfolio:~$`)**: Fully functional command terminal supporting `help`, `about`, `skills`, `experience`, `projects`, `leetcode`, `contact`, and `sudo hire-kriti` (with celebratory confetti particle explosion!).

3. **Curated Project Showcase (`FeaturedProjects.jsx`)**:
   - **AUREL — Luxury 3D Fashion E-Commerce**: Immersive 3D hero with Drei & Framer Motion, Context API cart and checkout flows.
   - **Algorithmic 3D & DSA Playground**: Spatial algorithm visualizer illustrating Graph Traversal & Dynamic Programming.
   - **DevNexus — Real-Time Cloud Workstation**: Full-stack MERN with Node.js, Express, MongoDB, and JWT Auth.
   - Architectural deep-dive modal with key technical contributions and benchmarked results.

4. **Procedural Web Audio Engine (`soundEffects.js`)**:
   - Zero-latency sci-fi acoustic feedback synthesized directly via the Web Audio API (no external MP3 asset dependencies).
   - Global audio mute/unmute control with real-time audio wave indicator in Navbar.

5. **Competitive Programming & LeetCode Analytics (`LeetCodeSection.jsx`)**:
   - Live analytics for **350+ solved challenges** across Easy, Medium, and Hard distributions.
   - Direct link to `@KritiPriya_coder`.

6. **Credentials & Certifications**:
   - Goldman Sachs Risk Job Simulation (Forage 2026).
   - Walmart Advanced Software Engineering Job Simulation (Forage 2026).
   - EF SET English Certificate — C1 Advanced (Score 61-70).
   - JEE Mains National Qualification.

7. **Direct Hiring & Communication Hub**:
   - Instant copy-to-clipboard for Email (`kritipriyas2004@gmail.com`) and Phone (`+91-xxxxxxxxxx`).
   - Integrated message transmission with automated confetti celebration.
   - Embedded interactive PDF resume viewer & one-click download.

---

## 🚀 Quick Start Guide

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory with code splitting.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Instant 1-Click Deployment (Vercel)

This project is pre-configured and 100% ready to deploy on **Vercel**:

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Kriti Priya 3D portfolio"
   git remote add origin https://github.com/your-username/kriti-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite** (auto-detected).
4. Click **Deploy** — your live 3D portfolio is active worldwide within 60 seconds!

---

## 📁 Project Architecture

```
kriti-portfolio/
├── public/
│   └── Kriti_Priya_Resume.pdf   # Official downloadable resume
├── src/
│   ├── components/
│   │   ├── AboutInteractive.jsx           # Dual-mode Story & CLI Terminal
│   │   ├── CertificationsAchievements.jsx # Goldman Sachs, Walmart, EF SET, JEE
│   │   ├── ContactSection.jsx             # Contact form & quick copy pills
│   │   ├── CyberCursor.jsx                # Custom interactive cursor
│   │   ├── ExperienceTimeline.jsx         # Codec Tech & Sandip Univ timeline
│   │   ├── FeaturedProjects.jsx           # Flagship AUREL 3D & Deep Dive modal
│   │   ├── Footer.jsx                     # Footer with back-to-top & social links
│   │   ├── Hero3D.jsx                     # Three.js / R3F WebGL Scene
│   │   ├── HeroSection.jsx                # Hero layout & dynamic typewriter
│   │   ├── LeetCodeSection.jsx            # 350+ LeetCode breakdown
│   │   ├── Navbar.jsx                     # Glassmorphic header with sound toggle
│   │   ├── ResumeModal.jsx                # Embedded PDF viewer modal
│   │   └── StatsRibbon.jsx                # Key metric counters
│   ├── data/
│   │   └── portfolioData.js               # Centralized data model from resume
│   ├── utils/
│   │   └── soundEffects.js                # Procedural Web Audio synthesizer
│   ├── App.jsx                            # Root application component
│   ├── index.css                          # Custom Tailwind styling & glow effects
│   └── main.jsx                           # Application entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

