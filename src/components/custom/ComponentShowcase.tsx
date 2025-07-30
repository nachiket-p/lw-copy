import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ComponentShowcaseProps {
  title: string
  description?: string
  icon?: LucideIcon
  children: React.ReactNode
  className?: string
}

export function ComponentShowcase({
  title,
  description,
  icon: Icon,
  children,
  className
}: ComponentShowcaseProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="flex items-center space-x-3">
        {Icon && (
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary-foreground" />
          </div>
        )}
        <div>
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
      
      <div>{children}</div>
    </div>
  )
}

interface ComponentVariantProps {
  title: string
  description?: string
  children: React.ReactNode
  badge?: string
  className?: string
}

export function ComponentVariant({
  title,
  description,
  children,
  badge,
  className
}: ComponentVariantProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold text-foreground flex items-center space-x-2">
            <span>{title}</span>
            {badge && (
              <Badge variant="secondary" className="text-xs">
                {badge}
              </Badge>
            )}
          </h4>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
      
      <Card className="bg-secondary/30">
        <CardContent className="p-8">
          {children}
        </CardContent>
      </Card>
    </div>
  )
}

interface ComponentGridProps {
  children: React.ReactNode
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export function ComponentGrid({
  children,
  columns = 2,
  className
}: ComponentGridProps) {
  const getGridCols = () => {
    switch (columns) {
      case 1: return "grid-cols-1"
      case 2: return "grid-cols-1 lg:grid-cols-2"
      case 3: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      case 4: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      default: return "grid-cols-1 lg:grid-cols-2"
    }
  }

  return (
    <div className={cn("grid gap-6", getGridCols(), className)}>
      {children}
    </div>
  )
}

interface CodeExampleProps {
  code: string
  language?: string
  title?: string
  className?: string
}

export function CodeExample({
  code,
  language = "tsx",
  title,
  className
}: CodeExampleProps) {
  return (
    <Card className={cn("mt-4", className)}>
      {title && (
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className={title ? "pt-0" : undefined}>
        <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </CardContent>
    </Card>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon?: LucideIcon
  children?: React.ReactNode
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  children,
  className
}: FeatureCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        <div className="flex items-center space-x-3">
          {Icon && (
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon className="w-4 h-4 text-primary" />
            </div>
          )}
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {children && (
        <CardContent>
          {children}
        </CardContent>
      )}
    </Card>
  )
}