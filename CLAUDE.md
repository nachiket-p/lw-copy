# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Logicwind Website** built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The project serves as a comprehensive business website for Logicwind, "The Principled Pioneer" in Agentic Development, showcasing services, company values, and thought leadership in AI and responsible technology.

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

### Website Architecture
The website follows a multi-page Next.js application structure with the following key sections:

**Core Pages:**
- **Homepage** (`src/app/page.tsx`) - Sectioned homepage with hero, social proof, problem/solution, services, principles, success stories, and CTA
- **Services Pages** - Individual service pages using a consistent template structure
- **The Logicwind Way** - Company approach and principles pages
- **Contact Page** - Contact form and company information
- **Style Guide** (`src/app/style-guide/page.tsx`) - Design system documentation

**Site Navigation Structure:**
- Home
- Services (Dropdown: AI Advantage Sprint, Agentic MVP Development, Intelligent ERP Solutions, Agentic Development Teams)
- The Logicwind Way (Agentic Development, Responsible AI)
- Contact
- Style Guide (Internal design reference)

### Component Architecture
The website uses a modular component structure organized into logical folders:

**UI Components** (`src/components/ui/`):
- Base UI primitives using Radix UI and custom styling
- Button, Card, Input, Label, Select, Textarea, Form components
- Navigation Menu, Accordion, Tooltip, Dropdown Menu, Tabs
- Theme Toggle and other interactive elements

**Page Sections** (`src/components/homepage/`, `src/components/services/`, etc.):
- Homepage sections: HeroSection, SocialProofBar, ProblemSolutionSection, ServicesOverview, etc.
- Service page sections: ServiceHero, IsThisForYou, HowItWorks, WhatYouGet, etc.
- Contact components: ContactForm, ContactInfo

**Layout Components** (`src/components/layout/`):
- Header with navigation
- Footer with secondary navigation and links

**Custom Components** (`src/components/custom/`):
- MetricCard, ColorSwatch, ComponentShowcase for specialized functionality

### Brand Identity & Messaging
The website reflects Logicwind's "Principled Pioneer" brand identity with key messaging:

**Core Brand Elements:**
- **Tagline:** "The Agentic Advantage. Responsibly Delivered."
- **Positioning:** The principled pioneer in agentic development
- **Services:** AI Advantage Sprint, Agentic MVP Development, Intelligent ERP Solutions, Agentic Development Teams

**Brand Colors:**
- Hero Lime: `#D4F620` (primary accent for CTAs)
- Deep Navy: `#0B3B4D` (dark sections, professional tone)
- Logicwind Red: `#F04F4B` (legacy primary, used in theme system)
- Logicwind Blue: `#0E151E` (legacy dark, used in theme system)
- Pure White: `#FFFFFF` (backgrounds, text on dark)
- Light Beige: `#F5F0E8` (neutral backgrounds)

### CSS & Styling Architecture
**Global Styles (`src/app/globals.css`):**
- Comprehensive CSS custom properties for both new brand colors and legacy compatibility
- Tailwind CSS v4 integration with `@import "tailwindcss"`
- Custom theme system with light/dark mode support
- Brand-specific utility classes for both color palettes

**Styling Approach:**
- Tailwind utility-first methodology throughout all components
- Radix UI primitives with custom styling via class-variance-authority
- Responsive design with mobile-first approach
- Theme switching capability with ThemeContext

**Key Styling Libraries:**
- `tailwindcss` v4 - Utility-first CSS framework
- `class-variance-authority` - Composable utility classes for components
- `tailwind-merge` - Utility for merging Tailwind classes
- `clsx` - Conditional class names utility

### State Management & Context
**ThemeContext** (`src/contexts/ThemeContext.tsx`):
- Light/dark theme switching functionality
- Theme persistence across page loads
- Global theme state management for all components

## Development Guidelines

### Adding New Pages
1. Create page files in appropriate `src/app/` directory structure
2. Follow the established component pattern (services pages use consistent template structure)
3. Import and compose page-specific components from their respective folders
4. Maintain consistent layout with Header and Footer from layout components

### Component Development
1. Use the modular component structure - organize by purpose (ui/, homepage/, services/, layout/, etc.)
2. Follow Radix UI patterns for complex interactive components
3. Leverage class-variance-authority for component variants
4. Use TypeScript for all component props and type safety

### Content & Messaging Guidelines
- Follow the "Principled Pioneer" brand voice: confident, visionary, clear, direct
- Reference `ai-docs/logicwind-website-specs.md` for official copy and messaging
- Core services: AI Advantage Sprint, Agentic MVP Development, Intelligent ERP Solutions, Agentic Development Teams
- Maintain consistency with the "Agentic Advantage. Responsibly Delivered." tagline

### Brand Color Usage
- **Hero Lime** (`#D4F620`): Primary CTAs, accent highlights, key interactive elements
- **Deep Navy** (`#0B3B4D`): Dark sections, professional content areas, contrast backgrounds
- **Logicwind Red/Blue**: Legacy colors maintained in theme system for compatibility
- Always use CSS custom properties or Tailwind utility classes rather than hardcoded hex values

### Form Implementation
- Use React Hook Form with Zod validation for all forms
- Implement proper form accessibility with labels and ARIA attributes
- Follow the contact form pattern for consistent styling and UX

### ESLint Considerations
- Use `&apos;` for apostrophes in JSX content to avoid ESLint warnings
- Use `defaultValue` and `defaultChecked` for form inputs instead of `value` and `checked`

## Project Dependencies

### Core Framework
- **Next.js 15** with React 19 - Latest Next.js with React Server Components
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS v4** - Latest utility-first CSS framework

### UI Library Stack
- **Radix UI** - Accessible, unstyled UI primitives (@radix-ui/react-*)
- **Lucide React** - Icon library for consistent iconography
- **class-variance-authority** - Type-safe component variants
- **clsx** & **tailwind-merge** - Conditional and merged class utilities

### Form Handling
- **React Hook Form** - Performant, flexible forms with validation
- **@hookform/resolvers** - Validation resolvers for React Hook Form
- **Zod** - TypeScript-first schema validation

This website serves as the digital presence for Logicwind's "Principled Pioneer" brand, showcasing agentic development services and responsible AI principles through a modern, performant web experience.