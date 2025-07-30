import { cva } from "class-variance-authority"

/**
 * Card variants for Logicwind design system
 * Extends the base Card component with brand-specific styling
 */
export const cardVariants = cva(
  "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-all",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        metric: "bg-primary text-primary-foreground shadow-xl hover:scale-105 transition-all duration-200",
        community: "bg-accent text-accent-foreground shadow-2xl hover:scale-105 transition-all duration-200",
        secondary: "bg-secondary text-secondary-foreground border-2 border-gray-100",
        outline: "border-2 border-primary/20 bg-background hover:border-primary/40",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-10",
      },
      rounded: {
        default: "rounded-xl",
        lg: "rounded-2xl",
        full: "rounded-3xl",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
)

/**
 * Badge variants for Logicwind design system
 */
export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Logicwind custom variants
        fitness: "border-transparent bg-primary text-primary-foreground hover:brightness-110 transition-all uppercase tracking-wide font-bold",
        progress: "border-transparent bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md",
        achievement: "border-2 border-primary bg-primary/10 text-primary font-bold",
        community: "border-transparent bg-accent text-accent-foreground hover:bg-accent/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Input variants for consistent form styling
 */
export const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-200 focus-visible:border-primary focus-visible:ring-primary/20",
        success: "border-green-400 bg-green-50 focus-visible:border-green-500 focus-visible:ring-green-500/20",
        error: "border-red-400 bg-red-50 focus-visible:border-red-500 focus-visible:ring-red-500/20",
        fitness: "border-gray-200 focus-visible:border-primary focus-visible:ring-primary/30 rounded-xl hover:border-gray-300 transition-all",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-12 px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)