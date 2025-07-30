# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Logicwind Design System** built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The project serves as a comprehensive design system documentation and component library showcasing all key design elements, components, and patterns for the Logicwind brand.

## Development Commands

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Port handling: If port 3000 is busy, Next.js will auto-assign port 3001
```

## Architecture & Structure

### Core Design System Architecture
The design system is implemented as a single comprehensive page (`src/app/page.tsx`) that demonstrates all components in a documentation-style layout:

1. **Color Palette Section** - Interactive color swatches with click-to-copy functionality
2. **Typography System** - Complete hierarchy from headings to UI labels
3. **Component Library** - Buttons, cards, forms, and interactive elements
4. **Usage Examples** - Live demonstrations of each component variant

### Brand Identity (Logicwind)
The design system is built around the Logicwind brand specifications found in `ai-docs/brand-design-specs.md`:

**Primary Colors:**
- Hero Lime: `#D4F620` (primary accent, pill buttons, score cards)
- Deep Navy: `#0B3B4D` (dark sections, community cards)
- Pure White: `#FFFFFF` (backgrounds, text on dark)
- Light Beige: `#F5F0E8` (neutral backgrounds)
- Black: `#000000` (primary text)

**Key Design Patterns:**
- Pill-shaped primary buttons with uppercase text
- Rounded cards (16-20px radius) with subtle shadows
- Score/progress cards with lime backgrounds
- Dark navy sections for community content
- Clean form inputs with minimal design

### CSS Architecture
**Global Styles (`src/app/globals.css`):**
- CSS custom properties for brand colors
- Tailwind integration with `@import "tailwindcss"`
- Brand-specific utility classes (`.bg-hero-lime`, `.text-deep-navy`, etc.)

**Component Styling:**
- Uses Tailwind utility classes throughout
- Inline styles for exact brand colors (`style={{backgroundColor: '#D4F620'}}`)
- Responsive design with mobile-first approach

### Client-Side Interactivity
**Important:** This is a Client Component (`"use client"` directive) because it includes:
- Click handlers for color copying functionality
- Interactive form elements
- Hover states and transitions

### Reference Materials
The design system is based on a fitness website design reference (`ai-docs/Fitness Website Design by Levi Wilson.webp`) which provides visual examples of:
- Hero sections with large background images
- Score cards with user metrics (87% fitness scores)
- Split-screen layouts (content + image)
- Community sections with dark backgrounds
- Newsletter signup patterns

## Development Guidelines

### Adding New Components
1. Follow the existing pattern structure in `page.tsx`
2. Use the established brand colors from CSS custom properties
3. Maintain responsive design patterns
4. Include usage examples and code snippets
5. Use proper semantic HTML and accessibility attributes

### Color Usage
- Hero Lime (`#D4F620`): Primary CTAs, score cards, accent elements
- Deep Navy (`#0B3B4D`): Dark sections, community content, footer areas
- Light Beige (`#F5F0E8`): Subtle backgrounds, neutral content areas
- Always test contrast ratios for accessibility

### Typography Patterns
- Headings: Bold weights, generous line spacing
- Labels: Uppercase, tracking-wide, small sizes
- UI Text: Medium weights for personalized messages
- Button Text: Uppercase, semibold, letter spacing

### Form Elements
- Clean inputs with subtle borders (`border-gray-200`)
- Focus states change border to black
- Small uppercase labels above inputs
- Validation states with colored borders and helper text

### ESLint Considerations
- Use `&apos;` for apostrophes in JSX content to avoid ESLint warnings
- Use `defaultValue` and `defaultChecked` for form inputs instead of `value` and `checked`

This design system serves as both documentation and a living example of the Logicwind brand implementation, providing a foundation for consistent UI development across all Logicwind products.