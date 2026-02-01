# 🚀 SPEKTAKULER Portfolio - Setup Instructions

## 📋 Pre-requisites

Before starting, ensure you have:

- **Node.js**: v20.x or higher (recommended: v20.11.0+)
- **npm**: v10.x or higher (comes with Node.js)
- **Git**: Latest version
- **Code Editor**: VS Code recommended (with extensions: ESLint, Prettier, Tailwind CSS IntelliSense)
- **Modern Browser**: Chrome, Firefox, or Edge (latest version)

## 🎯 Tech Stack Overview

### Core Framework
- **Next.js 15.1.3** (App Router with Turbopack)
- **React 19**
- **TypeScript 5.7**

### 3D & Animation
- **Three.js r171** - WebGL 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Advanced animations
- **GSAP** - Complex scroll animations
- **React Spring** - Physics-based animations

### UI & Styling
- **Tailwind CSS 4.0** (PostCSS-based, latest version)
- **shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons
- **Class Variance Authority** - Component variants

### Smooth Scrolling & Effects
- **Lenis** - Ultra-smooth scrolling
- **Canvas Confetti** - Celebration effects
- **React Intersection Observer** - Scroll-triggered animations

### Utilities
- **clsx** - Conditional classNames
- **tailwind-merge** - Merge Tailwind classes
- **zustand** - State management

## 📦 Step-by-Step Installation

### Step 1: Initialize Next.js Project

```bash
# Create new Next.js project with TypeScript
npx create-next-app@latest portfolio-spektakuler --typescript --tailwind --app --src-dir --import-alias "@/*"

# Navigate to project directory
cd portfolio-spektakuler
```

**Configuration during setup:**
- ✅ TypeScript: Yes
- ✅ ESLint: Yes
- ✅ Tailwind CSS: Yes
- ✅ `src/` directory: Yes
- ✅ App Router: Yes
- ✅ Import alias: Yes (@/*)
- ✅ Turbopack: Yes

### Step 2: Install Production Dependencies

```bash
# 3D & Animation Libraries
npm install three@0.171.0 @react-three/fiber@8.17.10 @react-three/drei@9.117.3
npm install framer-motion@11.13.5 gsap@3.12.5 react-spring@9.7.4

# UI Components & Icons
npm install lucide-react@0.469.0 class-variance-authority@0.7.1
npm install clsx@2.1.1 tailwind-merge@2.7.0

# Smooth Scrolling & Effects
npm install lenis@1.1.17 canvas-confetti@1.9.3
npm install react-intersection-observer@9.13.1

# State Management
npm install zustand@5.0.2

# Utilities
npm install react-type-animation@3.2.0
```

### Step 3: Install Development Dependencies

```bash
# Type definitions
npm install -D @types/three@0.171.0 @types/canvas-confetti@1.6.4

# Tailwind CSS plugins (if needed)
npm install -D @tailwindcss/typography @tailwindcss/forms

# Code quality tools (optional but recommended)
npm install -D prettier prettier-plugin-tailwindcss
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Step 4: Setup shadcn/ui

```bash
# Initialize shadcn/ui
npx shadcn@latest init

# Install required components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add tabs
npx shadcn@latest add badge
npx shadcn@latest add tooltip
npx shadcn@latest add separator
npx shadcn@latest add scroll-area
```

**Configuration for shadcn/ui:**
- Style: New York
- Base color: Slate
- CSS variables: Yes

### Step 5: Environment Variables Setup

Create `.env.local` file in root directory:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Your Name Portfolio"

# Contact Form (Optional - EmailJS or similar)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Feature Flags
NEXT_PUBLIC_ENABLE_AUDIO=true
NEXT_PUBLIC_ENABLE_3D=true
NEXT_PUBLIC_ENABLE_EASTER_EGGS=true
```

Create `.env.example` for reference:

```env
# Copy this file to .env.local and fill in your values
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_APP_NAME=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_ENABLE_AUDIO=true
NEXT_PUBLIC_ENABLE_3D=true
NEXT_PUBLIC_ENABLE_EASTER_EGGS=true
```

### Step 6: Configuration Files

Will be provided in the complete source code package.

### Step 7: Run Development Server

```bash
# Start development server (with Turbopack)
npm run dev

# Or use classic webpack mode
npm run dev -- --no-turbopack
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 8: Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start
```

### Step 9: Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Or deploy to production
vercel --prod
```

**Alternative Deployment Options:**
- **Netlify**: `npm run build` → Deploy `out` folder
- **Cloudflare Pages**: Connect Git repository
- **Railway**: Connect Git repository
- **AWS Amplify**: Connect Git repository

## 🎨 Project Structure

```
portfolio-spektakuler/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Home page
│   │   ├── globals.css              # Global styles
│   │   └── favicon.ico              # Favicon
│   │
│   ├── components/                   # React components
│   │   ├── 3d/                      # Three.js components
│   │   │   ├── Scene3D.tsx          # Main 3D scene
│   │   │   ├── Avatar3D.tsx         # 3D Avatar
│   │   │   ├── ParticleSystem.tsx   # Particle effects
│   │   │   ├── FloatingShapes.tsx   # 3D geometric shapes
│   │   │   ├── Globe3D.tsx          # Interactive globe
│   │   │   ├── SkillSphere.tsx      # 3D skill cloud
│   │   │   └── ProjectCard3D.tsx    # 3D project cards
│   │   │
│   │   ├── sections/                # Page sections
│   │   │   ├── HeroSection.tsx      # Hero with 3D
│   │   │   ├── AboutSection.tsx     # About with globe
│   │   │   ├── ProjectsSection.tsx  # 3D gallery
│   │   │   ├── ExperienceSection.tsx # Timeline
│   │   │   ├── SkillsSection.tsx    # 3D skills
│   │   │   ├── BlogSection.tsx      # Blog/articles
│   │   │   └── ContactSection.tsx   # Contact form
│   │   │
│   │   ├── ui/                      # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── Navbar.tsx           # Navigation bar
│   │   │   ├── Footer.tsx           # Footer
│   │   │   ├── MobileNav.tsx        # Mobile navigation
│   │   │   ├── CommandPalette.tsx   # Ctrl+K search
│   │   │   └── ThemeToggle.tsx      # Dark/Light mode
│   │   │
│   │   ├── effects/                 # Special effects
│   │   │   ├── CursorFollower.tsx   # Custom cursor
│   │   │   ├── LoadingScreen.tsx    # 3D loading
│   │   │   ├── PageTransition.tsx   # Page transitions
│   │   │   ├── ScrollIndicator.tsx  # Scroll indicator
│   │   │   ├── GlitchText.tsx       # Glitch effect
│   │   │   ├── HolographicCard.tsx  # Holo card
│   │   │   └── ConfettiEffect.tsx   # Confetti
│   │   │
│   │   └── animations/              # Animation components
│   │       ├── FadeIn.tsx           # Fade in animation
│   │       ├── SlideIn.tsx          # Slide in animation
│   │       ├── ParallaxSection.tsx  # Parallax
│   │       └── ScrollReveal.tsx     # Scroll reveal
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useScrollProgress.ts     # Scroll progress
│   │   ├── useMousePosition.ts      # Mouse tracking
│   │   ├── useLenis.ts              # Smooth scroll
│   │   ├── useMediaQuery.ts         # Responsive
│   │   ├── useKonamiCode.ts         # Easter egg
│   │   ├── useSound.ts              # Sound effects
│   │   └── useTheme.ts              # Theme management
│   │
│   ├── lib/                          # Utilities & configs
│   │   ├── utils.ts                 # Utility functions
│   │   ├── cn.ts                    # className merger
│   │   ├── animations.ts            # Animation configs
│   │   └── constants.ts             # Constants
│   │
│   ├── store/                        # Zustand stores
│   │   ├── themeStore.ts            # Theme state
│   │   ├── audioStore.ts            # Audio state
│   │   └── uiStore.ts               # UI state
│   │
│   ├── types/                        # TypeScript types
│   │   ├── index.ts                 # Main types
│   │   ├── three.d.ts               # Three.js types
│   │   └── project.ts               # Project types
│   │
│   └── data/                         # Static data
│       ├── projects.ts              # Project data
│       ├── experience.ts            # Work experience
│       ├── skills.ts                # Skills data
│       └── social.ts                # Social links
│
├── public/                           # Static assets
│   ├── models/                      # 3D models (GLTF)
│   ├── images/                      # Images
│   ├── sounds/                      # Audio files
│   └── fonts/                       # Custom fonts
│
├── .env.local                        # Environment variables
├── .env.example                      # Env template
├── .gitignore                        # Git ignore
├── next.config.ts                    # Next.js config
├── tailwind.config.ts                # Tailwind config
├── tsconfig.json                     # TypeScript config
├── postcss.config.mjs                # PostCSS config
├── components.json                   # shadcn/ui config
├── package.json                      # Dependencies
└── README.md                         # Documentation
```

## 🔧 Configuration Files Details

### next.config.ts
Optimized for performance with image optimization, webpack config for Three.js, and production optimizations.

### tailwind.config.ts
Extended with custom colors, animations, keyframes, and Tailwind CSS 4.0 features using PostCSS.

### tsconfig.json
Strict TypeScript configuration with path aliases and optimizations.

### postcss.config.mjs
PostCSS configuration for Tailwind CSS 4.0 (uses `@tailwindcss/postcss`).

## 🎯 Performance Optimization Tips

1. **Code Splitting**: Use dynamic imports for heavy components
2. **Image Optimization**: Use Next.js Image component
3. **3D Model Optimization**: Keep models under 2MB, use GLTF compressed
4. **Lazy Loading**: Implement Intersection Observer for sections
5. **Bundle Analysis**: Run `npm run build` and check bundle size
6. **Lighthouse Audit**: Aim for 90+ scores on all metrics

## 🐛 Troubleshooting

### Issue: Three.js import errors
**Solution**: Clear `.next` folder and reinstall dependencies

### Issue: Tailwind styles not applying
**Solution**: Check PostCSS config is using `@tailwindcss/postcss`

### Issue: Performance issues with 3D
**Solution**: Reduce polygon count, use LOD (Level of Detail), implement frustum culling

### Issue: Build errors
**Solution**: Check TypeScript errors with `npm run type-check`

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

## 🎨 Customization Guide

Will be provided in complete documentation package.

## 🚀 Next Steps

After setup, you'll receive:
1. Complete source code with all components
2. Configuration files
3. Sample data files
4. Asset preparation guide
5. Deployment checklist

---

**Ready to build something SPEKTAKULER? Let's go! 🚀**
