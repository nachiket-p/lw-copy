import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { cardVariants } from "@/lib/variants"
import { type VariantProps } from "class-variance-authority"
import { LucideIcon, TrendingUp } from "lucide-react"

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  title: string
  value: string | number
  unit?: string
  trend?: {
    value: string
    direction: "up" | "down"
    period: string
  }
  users?: Array<{
    name: string
    avatar: string
  }>
  usersCount?: string
  icon?: LucideIcon
  chart?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
}

export function MetricCard({
  title,
  value,
  unit,
  trend,
  users,
  usersCount,
  icon: Icon,
  chart,
  action,
  variant = "metric",
  className,
  ...props
}: MetricCardProps) {
  return (
    <Card
      className={cn(
        cardVariants({ variant }),
        className
      )}
      {...props}
    >
      <CardContent className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold opacity-70">
              {title}
            </p>
          </div>
          {Icon && (
            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
          )}
        </div>

        {/* Main Value */}
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-5xl font-bold">{value}</span>
            {unit && <span className="text-xl ml-1">{unit}</span>}
          </div>
          {trend && (
            <div className="flex items-center space-x-2 mt-2">
              <TrendingUp className="w-4 h-4" />
              <p className="text-sm font-semibold">
                {trend.direction === "up" ? "+" : ""}{trend.value} {trend.period}
              </p>
            </div>
          )}
        </div>

        {/* Users */}
        {users && (
          <div className="mb-6">
            <div className="flex items-center space-x-3">
              {users.map((user, index) => (
                <Avatar key={index} className="w-8 h-8 border-2 border-white">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
              {usersCount && (
                <span className="text-xs opacity-70 ml-2">{usersCount}</span>
              )}
            </div>
          </div>
        )}

        {/* Chart */}
        {chart && (
          <div className="w-full h-24 rounded-2xl overflow-hidden mb-4">
            {chart}
          </div>
        )}

        {/* Action */}
        {action && (
          <div className="mt-4">
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={action.onClick}
              className="w-full"
            >
              {action.label}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

interface SimpleMetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  description?: string
  icon?: LucideIcon
  variant?: "default" | "primary" | "accent"
}

export function SimpleMetricCard({
  label,
  value,
  description,
  icon: Icon,
  variant = "default",
  className,
  ...props
}: SimpleMetricCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-primary-foreground"
      case "accent":
        return "bg-accent text-accent-foreground"
      default:
        return "bg-card text-card-foreground border-2 border-gray-100"
    }
  }

  return (
    <Card
      className={cn(
        "p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200",
        getVariantStyles(),
        className
      )}
      {...props}
    >
      <CardContent className="p-0">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase tracking-wide font-semibold opacity-70">
            {label}
          </span>
          {Icon && <Icon className="w-4 h-4 opacity-60" />}
        </div>
        <div className="mb-4">
          <div className="text-4xl font-bold">{value}</div>
          {description && (
            <div className="text-sm opacity-70 mt-1">{description}</div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}