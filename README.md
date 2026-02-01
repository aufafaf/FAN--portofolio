# 🚀 Portfolio SPEKTAKULER - Next.js 15 + Three.js

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-r171-black?style=for-the-badge&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

**A cutting-edge 3D portfolio with cyberpunk aesthetics and mind-blowing interactions**

[Live Demo](#) • [Documentation](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## ✨ Features

### 🎨 Visual Excellence
- **3D Interactive Hero** - Rotating avatar with particle system
- **Cyberpunk Aesthetics** - Neon colors, glitch effects, holographic elements
- **Smooth Animations** - Powered by Framer Motion, GSAP, and React Spring
- **Glassmorphism & Neumorphism** - Modern UI design patterns
- **Ultra-Smooth Scrolling** - Lenis integration for buttery smoothness

### 🚀 Core Sections
1. **Hero Section**
   - 3D animated avatar/model
   - Particle system with cursor trail
   - Animated gradient background
   - Typewriter effect with glitch animation
   - Floating 3D geometric shapes
   - Music toggle for ambient background

2. **About Section**
   - Interactive 3D globe showing your location
   - 3D rotating skills carousel
   - Scroll-triggered timeline
   - Bento grid layout for hobbies
   - AR-style profile card with glassmorphism

3. **Projects Section**
   - 3D card gallery with perspective
   - Filterable by category
   - Drag-to-explore gallery
   - Video auto-play on hover
   - Featured projects spotlight

4. **Experience Section**
   - Interactive 3D timeline
   - Company logos with 3D hover effects
   - Expandable cards
   - Achievement badges

5. **Skills Section**
   - 3D skill sphere/cloud
   - Floating islands per category
   - Liquid wave animation bars
   - Interactive tech radar chart

6. **Contact Section**
   - 3D contact form
   - Confetti success animation
   - 3D mailbox interaction
   - Social media 3D icons

### 🎪 Special Features
- **Easter Eggs** - Konami code unlocks secret content
- **Custom Cursor** - Morphing cursor following mouse
- **Command Palette** - Press Ctrl+K for quick navigation
- **Theme Customizer** - Dark/Light/Auto with custom accent colors
- **Magnetic Buttons** - Buttons attracted to cursor
- **Parallax Scrolling** - Multi-layer depth effects
- **PWA Support** - Install as progressive web app
- **Achievement System** - Unlock achievements while exploring

### 📱 Responsive & Accessible
- Mobile-first approach
- Touch gestures for 3D interactions
- Simplified 3D for mobile (performance optimization)
- Keyboard navigation support
- Screen reader friendly
- WCAG 2.1 AA compliant

### ⚡ Performance
- **Lighthouse Score**: 90+ target
- **Code Splitting** - Dynamic imports for heavy components
- **Lazy Loading** - Images with blur-up effect
- **3D Optimization** - LOD (Level of Detail) implementation
- **Bundle Size** - Optimized with Next.js 15

---

## 🛠️ Tech Stack

### Core
- **Next.js 15.1.3** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript 5.7** - Type safety
- **Tailwind CSS 4.0** - Utility-first CSS (PostCSS-based)

### 3D & Animation
- **Three.js (r171)** - WebGL 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Advanced React animations
- **GSAP** - Professional-grade animation
- **React Spring** - Physics-based animations

### UI & Components
- **shadcn/ui** - Beautiful component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Component variants

### State & Utilities
- **Zustand** - Lightweight state management
- **Lenis** - Smooth scrolling library
- **Canvas Confetti** - Celebration effects
- **React Intersection Observer** - Scroll-triggered animations

---

## 📦 Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher
- Git

### Installation

```bash
# 1. Create Next.js project
npx create-next-app@latest portfolio-spektakuler --typescript --tailwind --app --src-dir

# 2. Navigate to directory
cd portfolio-spektakuler

# 3. Install dependencies
npm install three@0.171.0 @react-three/fiber@8.17.10 @react-three/drei@9.117.3
npm install framer-motion@11.13.5 gsap@3.12.5 react-spring@9.7.4
npm install lucide-react@0.469.0 class-variance-authority@0.7.1
npm install clsx@2.1.1 tailwind-merge@2.7.0
npm install lenis@1.1.17 canvas-confetti@1.9.3
npm install react-intersection-observer@9.13.1
npm install zustand@5.0.2 react-type-animation@3.2.0

# 4. Install dev dependencies
npm install -D @types/three@0.171.0 @types/canvas-confetti@1.6.4

# 5. Setup shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button card dialog tabs badge tooltip separator scroll-area

# 6. Copy configuration files
# Copy all files from this package to your project

# 7. Create .env.local
cp .env.example .env.local
# Edit .env.local with your values

# 8. Run development server
npm run dev
```

Visit `http://localhost:3000` 🎉

---

## 📁 Project Structure

```
portfolio-spektakuler/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   │
│   ├── components/              # React components
│   │   ├── 3d/                 # Three.js components
│   │   ├── sections/           # Page sections
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layout/             # Layout components
│   │   ├── effects/            # Special effects
│   │   └── animations/         # Animation components
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useMousePosition.ts
│   │   ├── useScrollProgress.ts
│   │   ├── useLenis.ts
│   │   ├── useMediaQuery.ts
│   │   └── useKonamiCode.ts
│   │
│   ├── lib/                     # Utilities & configs
│   │   ├── utils.ts
│   │   ├── animations.ts
│   │   └── constants.ts
│   │
│   ├── store/                   # Zustand stores
│   │   ├── themeStore.ts
│   │   ├── audioStore.ts
│   │   └── uiStore.ts
│   │
│   ├── types/                   # TypeScript types
│   │   └── index.ts
│   │
│   └── data/                    # Static data
│       ├── projects.ts
│       ├── experience.ts
│       └── skills.ts
│
├── public/                      # Static assets
│   ├── models/                 # 3D models
│   ├── images/                 # Images
│   ├── sounds/                 # Audio files
│   └── fonts/                  # Custom fonts
│
├── Configuration Files
├── next.config.ts              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
├── postcss.config.mjs          # PostCSS config
└── package.json                # Dependencies
```

---

## 🎨 Customization

### Change Theme Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  neon: {
    pink: "#YOUR_COLOR",    // Change to your preference
    cyan: "#YOUR_COLOR",
    purple: "#YOUR_COLOR",
    // ... more colors
  }
}
```

### Add Your Information

Edit `src/lib/constants.ts`:

```ts
export const PERSONAL_INFO = {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  // ... your info
};
```

### Add Projects

Create `src/data/projects.ts`:

```ts
export const projects: Project[] = [
  {
    id: "1",
    title: "Project Name",
    description: "Project description",
    category: "Web Development",
    // ... more fields
  }
];
```

### Change Fonts

The project uses:
- **Orbitron** - Headings (cyberpunk style)
- **Rajdhani** - Body text
- **Fira Code** - Monospace/code
- **Audiowide** - Display text

To change fonts, edit `globals.css` and `tailwind.config.ts`.

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy .next folder
```

**Docker:**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📊 Performance Optimization

### Image Optimization
- Use Next.js Image component
- Compress images before upload
- Use AVIF/WebP formats
- Lazy load images

### 3D Model Optimization
- Keep models under 2MB
- Use GLTF compressed format
- Implement LOD (Level of Detail)
- Use Draco compression

### Code Splitting
```tsx
// Dynamic import for heavy components
const Model3D = dynamic(() => import('@/components/3d/Model3D'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});
```

### Bundle Analysis
```bash
npm run analyze
```

---

## 🎯 Best Practices

### 1. File Organization
- Keep components small and focused
- Use barrel exports (index.ts)
- Separate business logic from UI

### 2. TypeScript
- Always define types
- Avoid `any` type
- Use strict mode

### 3. Performance
- Memoize expensive computations
- Use React.memo for pure components
- Implement virtual scrolling for long lists

### 4. Accessibility
- Use semantic HTML
- Provide alt text for images
- Test with keyboard navigation
- Use ARIA labels

### 5. SEO
- Add meta tags
- Use semantic headings
- Implement structured data
- Create sitemap

---

## 🐛 Troubleshooting

### Issue: Three.js import errors
**Solution:**
```bash
rm -rf .next node_modules
npm install
```

### Issue: Tailwind styles not applying
**Solution:** Check `postcss.config.mjs` is using `@tailwindcss/postcss`

### Issue: Performance issues with 3D
**Solution:**
- Reduce polygon count
- Implement frustum culling
- Use LOD (Level of Detail)
- Enable GPU acceleration

### Issue: Build errors
**Solution:**
```bash
npm run type-check
# Fix TypeScript errors
```

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Three.js Docs](https://threejs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- Three.js community for amazing 3D library
- Vercel for Next.js framework
- shadcn for beautiful components
- All the open source contributors

---

## 📬 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/portfolio-spektakuler](https://github.com/yourusername/portfolio-spektakuler)

---

<div align="center">

**Made with ❤️ and cutting-edge technology**

⭐ Star this repo if you found it helpful!

</div>
