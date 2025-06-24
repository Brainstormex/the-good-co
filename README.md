# Parallax Website

A modern, responsive website featuring smooth parallax animations built with Next.js, TypeScript, and Framer Motion. The website showcases movie and TV series content with engaging scroll-based animations.

## 🚀 Features

- **Smooth Parallax Effects**: Card-based parallax animations with consistent movement patterns
- **Responsive Design**: Optimized for desktop and mobile devices
- **TypeScript**: Full type safety and IntelliSense support
- **Framer Motion**: High-performance animations
- **Lenis Smooth Scrolling**: Buttery smooth scrolling experience
- **Loading Screen**: Elegant loading animation before content appears
- **Modern UI**: Clean, minimalist design with beautiful typography

## 📁 Project Structure

```
parallax/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── favicon.ico
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Section1.tsx
│   │   │   ├── Section2.tsx
│   │   │   └── Section3.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── MobileNav.tsx
│   │   └── Navbar.tsx
│   ├── hooks/
│   │   ├── useParallax.tsx
│   │   └── useIsLargeScreen.tsx
│   └── types/
├── public/
│   └── assets/
│       └── images/
│           ├── goodbuy.jpg
│           ├── sunflower.jpg
│           └── ganapath.jpg
└── package.json
```

## 🎯 Components

### HeroSection

### Section1 (Goodbye)

### Section2 (Sunflower)

### Section3 (Ganapath)

## 🪝 Custom Hooks

### useParallaxCard()
A comprehensive parallax hook that provides multiple animation values for card-based layouts.

**Returns:**
- `ref`: React ref for scroll tracking
- `imageY`: Image movement transform (-100 to 100px)
- `cardY`: Card container movement (0 to -50px)
- `textY`: Text movement transform (0 to -200px)
- `opacity`: Fade in/out effect
- `scrollYProgress`: Raw scroll progress value

**Usage:**
```typescript
import { useParallaxCard } from "@/hooks/useParallax";

const { ref, imageY, cardY, textY, opacity } = useParallaxCard();

return (
  <motion.div ref={ref} style={{ y: cardY, opacity }}>
    <motion.div style={{ y: imageY }}>
      <Image src="..." alt="..." />
    </motion.div>
    <motion.div style={{ y: textY }}>
      <h1>Title</h1>
    </motion.div>
  </motion.div>
);
```

### useIsLargeScreen()
Utility hook for detecting large screens (≥1024px).

**Returns:**
- `boolean`: True if screen width is ≥1024px

**Usage:**
```typescript
import { useIsLargeScreen } from "@/hooks/useIsLargeScreen";

const isLargeScreen = useIsLargeScreen();
```

## 🎨 Animation Effects

### Card Parallax
- **Container Movement**: Cards move up slightly as you scroll (0 to -50px)
- **Image Movement**: Images move in opposite direction for depth (-100 to 100px)
- **Text Movement**: Text moves for additional depth (0 to -200px, desktop only)
- **Opacity Fade**: Smooth fade in/out transitions

### Responsive Behavior
- **Desktop (≥1024px)**: Full parallax effects with text movement
- **Mobile (<1024px)**: Simplified effects without text movement for better performance

### Smooth Scrolling
- **Lenis Integration**: Buttery smooth scrolling with configurable settings
- **Touch Support**: Optimized for mobile touch interactions
- **Performance**: Efficient scroll handling with RAF

## 🛠️ Technologies Used

- **Next.js 15.3.2**: React framework with App Router
- **React 19**: Latest React version
- **TypeScript 5**: Type-safe JavaScript
- **Framer Motion 12.12.1**: Animation library
- **Tailwind CSS 4**: Utility-first CSS framework
- **Lenis 1.3.4**: Smooth scrolling library
- **Lucide React 0.511.0**: Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd parallax
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage Examples

### Basic Card Parallax
```typescript
import { useParallaxCard } from "@/hooks/useParallax";
import { useIsLargeScreen } from "@/hooks/useIsLargeScreen";

export default function MyComponent() {
  const { ref, imageY, cardY, textY, opacity } = useParallaxCard();
  const isLargeScreen = useIsLargeScreen();

  return (
    <motion.div ref={ref} style={{ y: cardY, opacity }}>
      <motion.div style={{ y: imageY }}>
        <Image src="/image.jpg" alt="Description" />
      </motion.div>
      <motion.div style={{ y: isLargeScreen ? textY : 0 }}>
        <h1>Title</h1>
      </motion.div>
    </motion.div>
  );
}
```

### Content Section with Card Movement
```typescript
<motion.div 
  className="flex gap-12 w-full text-black"
  style={{ y: cardY }}
>
  {/* Content that moves with the card */}
</motion.div>
```

## 🎨 Customization

### Adjusting Animation Ranges
You can modify the animation ranges in the `useParallax.ts` hook:

```typescript
// In useParallaxCard()
const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100]); // Image movement
const cardY = useTransform(scrollYProgress, [0, 1], [0, -50]);     // Card movement
const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);    // Text movement
```

### Screen Size Breakpoints
The responsive behavior uses a 1024px breakpoint. You can modify this in `useIsLargeScreen.tsx`:

```typescript
setIsLargeScreen(window.matchMedia("(min-width: 1024px)").matches);
```

### Lenis Smooth Scrolling Configuration
You can adjust the smooth scrolling settings in `page.tsx`:

```typescript
const lenis = new Lenis({
  duration: 1.2,
  orientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
});
```

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first approach**
- **Adaptive parallax effects**
- **Optimized performance on smaller screens**
- **Touch-friendly interactions**
- **Responsive typography and spacing**

## 🚀 Performance

- **Optimized animations** using Framer Motion's `transform-gpu`
- **Conditional rendering** for mobile devices
- **Efficient scroll listeners** with proper cleanup
- **Image optimization** with Next.js Image component
- **Smooth scrolling** with Lenis library
- **Loading screen** for better perceived performance

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Framer Motion for smooth animations
- Next.js team for the excellent framework
- Tailwind CSS for the utility-first approach
- Lenis for smooth scrolling
- Lucide for beautiful icons
