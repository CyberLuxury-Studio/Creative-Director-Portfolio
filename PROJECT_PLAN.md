# Project Plan: Cyberpunk Creative Director Portfolio (UI8 Template)

**Tech Stack:** Next.js 16.2.4 (App Router), Tailwind CSS, Framer Motion, Spline 3D, TypeScript.
**Aesthetic:** Cyberpunk, dark mode, neon glows, glitch effects, 3D tilt mechanics.
**Scroll Mechanics:** Primarily vertical with dedicated horizontal scroll sections.
**Target Market:** UI8 Creators / Creative Directors looking for a premium, highly interactive portfolio template.

---

## 1. Project Structure (Next.js App Router Convention)

```text
cyber-portfolio-ui8/
├── public/                 # Static assets (fonts, optimized placeholder images, SVGs)
│   ├── images/
│   │   ├── placeholders/   # UI8-safe non-copyrighted imagery (Unsplash CC0)
│   ├── models/             # Fallback images/videos for Spline scene
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, global fonts, providers, metadata
│   │   ├── page.tsx        # Main landing page assembling sections
│   │   ├── globals.css     # Tailwind imports & custom utilities (glitch, scanlines)
│   │   ├── fonts.ts        # Next/font configurations
│   ├── components/
│   │   ├── layout/         # Header, Footer, CustomCursor, SmoothScroll
│   │   ├── sections/       # Hero, SelectedWorks (Horizontal), Services, Packages, Contact
│   │   ├── ui/             # Reusable Atoms: Button, Card, NeonText, 3DTiltWrapper
│   │   ├── 3d/             # SplineViewer component (lazy loaded)
│   ├── lib/
│   │   ├── utils.ts        # Tailwind merge/clsx utility (cn)
│   │   ├── constants.ts    # Site data, navigation links, pricing tiers
│   │   ├── motion.ts       # Framer Motion reusable variants
│   ├── hooks/
│   │   ├── useMousePosition.ts
│   │   ├── useMediaQuery.ts
├── tailwind.config.ts      # Custom theme colors, animations, shadows
├── next.config.mjs         # Bundle analyzer, image domains, Spline transpilation rules
├── package.json
├── tsconfig.json
└── README.md               # Extensive UI8 setup documentation
```

---

## 2. Section-by-Section Breakdown

### A. Hero Section (Vertical)
*   **Layout:** Full screen (`100vh`), content overlaid on top of a full-bleed 3D background.
*   **Content:** Large glitch-effect typographic Title ("Creative Director"), Subtitle ("Bridging Dimensions"), Primary CTA ("Initialize Sequence" / View Work).
*   **Spline Usage:** Full-screen conceptualized Spline scene (see section 5).
*   **Animations:** Staggered fade-up text on load, continuous subtle glitch effect on title, magnetic hover effect on CTA.
*   **Tailwind:** `h-screen w-full relative overflow-hidden bg-black text-white mix-blend-difference z-10`.

### B. Selected Works (Horizontal Scroll)
*   **Layout:** Pinned section. The user scrolls vertically, but the content translates horizontally until the end of the gallery is reached.
*   **Content:** Large, striking project cards featuring UI8-safe placeholder images. Project title, tech stack tags, and "View Case Study" link.
*   **Animations:** Horizontal translation tied to vertical scroll progress (Framer Motion `useScroll` and `useTransform`). 3D Tilt effect applied to individual cards on mouse move.
*   **Tailwind:** `h-[300vh] relative` (for scroll distance), inner container `sticky top-0 flex h-screen items-center`.

### C. Services & Capabilities (Vertical Grid)
*   **Layout:** CSS Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) with staggered spacing.
*   **Content:** Cyber-themed iconography, service titles (e.g., "UI/UX Architecture", "Spatial Design", "Motion Engineering"), and brief descriptions.
*   **Animations:** Scroll-triggered `whileInView` staggered fade-ups. Subtle glowing border animation on card hover.
*   **Tailwind:** `grid gap-8 px-4 md:px-10 lg:px-20`. Cards: `bg-zinc-950 border border-zinc-800 hover:border-cyan-500/50 transition-colors`.

### D. Packages / Retainers (Vertical)
*   **Layout:** Flexbox layout displaying pricing/retainer tiers. Highlighting the "Pro" tier.
*   **Content:** Tier names (e.g., "Neon", "Cyber", "Quantum"), monthly rates, list of deliverables.
*   **Animations:** Hover state scales up the card slightly, illuminates a neon drop-shadow.
*   **Tailwind:** `flex flex-col md:flex-row justify-center gap-6`. Highlight card: `ring-2 ring-fuchsia-500 shadow-[0_0_30px_rgba(217,70,239,0.3)]`.

### E. Contact / Terminal CTA (Vertical)
*   **Layout:** Centered block styled like an old CRT terminal or command-line interface.
*   **Content:** Blinking cursor typing out an invitation to connect. A form with minimalistic, underline-only inputs.
*   **Animations:** Typewriter effect for the heading. Form inputs glow upon focus.
*   **Tailwind:** `font-mono bg-black/80 backdrop-blur-md border border-green-500/30 text-green-400 p-10 rounded-lg`.

### F. Footer
*   **Layout:** Minimal, grid/flex hybrid.
*   **Content:** Social links, copyright (using dynamic year), link to UI8 profile.
*   **Animations:** Hover links glitch slightly.
*   **Tailwind:** `border-t border-zinc-900 py-8 text-zinc-500 text-sm`.

---

## 3. Design System

### Color Palette (Cyberpunk Theme)
*   **Backgrounds:** `Void` (#050505), `Surface` (#0F0F13)
*   **Primary Accent (Neon Cyan):** #00F0FF (Glows, Primary CTAs)
*   **Secondary Accent (Fuchsia/Magenta):** #FF003C (Alerts, Highlights)
*   **Tertiary Accent (Matrix Green):** #00FF41 (Terminal UI elements)
*   **Text:** `High Contrast` (#FFFFFF), `Muted` (#A0A0B0)

### Typography
*   **Headings:** `Space Grotesk` or `Syne` (Google Fonts) - Geometric, slightly futuristic.
*   **Body:** `Inter` or `Geist` - Highly legible, modern.
*   **Monospace/Terminal:** `JetBrains Mono` - Used for tech specs, tags, and terminal sections.

### Spacing Scale
Standard Tailwind 4pt grid, heavily utilizing larger spacing (`gap-16`, `gap-32`) to allow the 3D and neon elements to breathe.

### Reusable UI Components
*   `NeonButton`: Buttons with custom box-shadow glows.
*   `GlitchText`: Text wrapper applying CSS keyframe glitch animations.
*   `TiltCard`: Wrapper component applying Framer Motion 3D tilt calculations based on mouse coordinates.
*   `ScanlinesOverlay`: A fixed, pointer-events-none div applying a subtle CRT scanline pattern over the screen.

---

## 4. Animation Plan

### Framer Motion Strategy
*   **Page Transitions:** Smooth fade in on route changes (if multi-page later, but setup for App Router template).
*   **Scroll Animations:** Extensive use of `whileInView` with `viewport={{ once: true, margin: "-100px" }}` for fade-up and slide-in effects.
*   **Horizontal Scroll:**
    *   Hook: `const { scrollYProgress } = useScroll({ target: containerRef })`
    *   Transform: `const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])`
*   **Variants Dictionary (`lib/motion.ts`):**
    ```typescript
    export const fadeUp = {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };
    export const staggerContainer = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    ```

---

## 5. Spline Integration Plan

### Conceptualized Scene
*   **Concept:** A slowly rotating, abstract cybernetic skull or a geometric hyper-cube constructed of glowing wireframes and floating metallic shards.
*   **Lighting:** Strong rim lighting utilizing the fuchsia and cyan brand colors.
*   **Interaction:** Camera slightly tracks mouse movement (parallax), but auto-rotates if idle.

### Implementation & Performance
*   **Tool:** `@splinetool/react-spline`
*   **Lazy Loading:** The Spline component **must** be dynamically imported with SSR disabled to prevent hydration errors and block the initial page load.
    ```typescript
    const SplineScene = dynamic(() => import('@splinetool/react-spline'), {
      ssr: false,
      loading: () => <div className="animate-pulse bg-zinc-900 w-full h-full" /> // Or a static WebP fallback
    });
    ```
*   **Fallback Strategy:** Provide a high-quality, heavily compressed WebP image of the scene that loads instantly while the 3D canvas initializes underneath. Once `onLoad` triggers on the Spline component, fade out the fallback image.

---

## 6. Component Architecture

| Component | Props | Responsibility |
| :--- | :--- | :--- |
| `HeroSection` | None | Assembles Title, Spline canvas, and CTA. Handles entrance animations. |
| `HorizontalGallery` | `projects: Project[]` | Manages scroll container ref, calculates Framer Motion `x` translation. |
| `TiltCard` | `children, className` | Tracks `onMouseMove` to calculate `rotateX` and `rotateY`. Applies glare effect. |
| `SplineViewer` | `sceneUrl` | Wraps `@splinetool/react-spline`, handles lazy loading, fallback state, and `onLoad` events. |
| `NeonButton` | `label, href, variant` | Renders an anchor/button with specific hover glows (cyan vs fuchsia). |
| `TerminalContact` | None | Renders the specific CRT-styled contact form and handles simulated typewriter logic. |

---

## 7. Performance Strategy

*   **Image Optimization:** All placeholder images (UI8-safe Unsplash) provided in WebP format and served via Next.js `<Image>` component with proper `sizes` attributes.
*   **Font Loading:** `next/font/google` used to self-host and pre-load Space Grotesk and JetBrains Mono, preventing layout shifts (CLS).
*   **Code Splitting:**
    *   Spline Viewer dynamically imported.
    *   Framer Motion imported strategically (using `m` and `LazyMotion` if bundle size becomes an issue, though `framer-motion` tree-shakes decently in App Router).
*   **Bundle Analyzer:** Pre-configured `@next/bundle-analyzer` script included for end-user optimization checks.

---

## 8. UI8 Packaging Checklist

To ensure a top-tier rating and acceptance on UI8, the final zip file will include:

### 📁 Files & Folders
*   `📁 source_code/`: The complete Next.js project (minus `node_modules` and `.next`).
*   `📁 assets/`:
    *   Figma design file (if applicable/offered as a bonus).
    *   High-res preview screens for the UI8 product gallery (1920x1080).
    *   Promo video (MP4) demonstrating the horizontal scroll, 3D tilt, and Spline interactions.

### 📄 Documentation
*   `README.md`: Detailed instructions containing:
    *   Node.js version requirements (>=18).
    *   `npm install` / `npm run dev` commands.
    *   How to replace the Spline URL with their own scene.
    *   How to update colors in `tailwind.config.ts`.
    *   How to modify the Framer Motion variants.
*   `LICENSING.txt`: Explicitly stating that all images are CC0/Unsplash and free for commercial use, adhering to UI8 guidelines.

### 🛡️ Pre-Flight Checks
*   [ ] Run `npm run lint` and `npm run build` to ensure zero compilation errors.
*   [ ] Verify responsive design works on mobile, tablet, and desktop viewports (specifically ensuring the horizontal scroll degrades gracefully on mobile if necessary, or is touch-friendly).
*   [ ] Ensure no proprietary code or copyrighted assets are included.
