import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Copy, Check, LucideIcon } from "lucide-react"
import { useState } from "react"

interface ColorSwatchProps {
  name: string
  color: string
  description?: string
  icon?: LucideIcon
  usage?: string
  className?: string
}

export function ColorSwatch({
  name,
  color,
  description,
  icon: Icon,
  usage,
  className
}: ColorSwatchProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(color)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy color:", err)
    }
  }

  return (
    <TooltipProvider>
      <div
        className={cn(
          "group cursor-pointer transform hover:scale-105 transition-all duration-200",
          className
        )}
        onClick={copyToClipboard}
      >
        {/* Color Preview */}
        <div
          className="w-full h-32 rounded-t-2xl shadow-lg relative overflow-hidden border"
          style={{ backgroundColor: color }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
            {copied ? (
              <Check className="w-6 h-6 text-white drop-shadow-lg" />
            ) : (
              <Copy className="w-6 h-6 text-white drop-shadow-lg" />
            )}
          </div>
        </div>

        {/* Color Info */}
        <Card className="rounded-t-none border-t-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-foreground flex items-center">
                {Icon && <Icon className="w-4 h-4 mr-2" />}
                {name}
              </h3>
              {copied && (
                <Badge variant="default" className="text-xs">
                  Copied!
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground font-mono mb-1">{color}</p>
            {description && (
              <p className="text-xs text-muted-foreground/80 mt-1">{description}</p>
            )}
            {usage && (
              <div className="mt-3">
                <Badge variant="secondary" className="text-xs">
                  {usage}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  )
}

interface ColorPaletteProps {
  colors: Array<{
    name: string
    color: string
    description?: string
    icon?: LucideIcon
    usage?: string
  }>
  title?: string
  description?: string
  className?: string
}

export function ColorPalette({
  colors,
  title,
  description,
  className
}: ColorPaletteProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {title && (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
          {description && (
            <p className="text-lg text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {colors.map((colorItem, index) => (
          <ColorSwatch
            key={index}
            name={colorItem.name}
            color={colorItem.color}
            description={colorItem.description}
            icon={colorItem.icon}
            usage={colorItem.usage}
          />
        ))}
      </div>
    </div>
  )
}

interface ColorUsageExampleProps {
  title: string
  description: string
  icon?: LucideIcon
  examples: Array<{
    component: React.ReactNode
    description: string
  }>
  className?: string
}

export function ColorUsageExample({
  title,
  description,
  icon: Icon,
  examples,
  className
}: ColorUsageExampleProps) {
  return (
    <Card className={cn("p-8 rounded-2xl border-2 border-border", className)}>
      <CardContent className="p-0">
        <h4 className="font-semibold text-foreground mb-6 flex items-center">
          {Icon && <Icon className="w-4 h-4 mr-2" />}
          {title}
        </h4>
        <div className="space-y-4">
          {examples.map((example, index) => (
            <div key={index} className="space-y-2">
              {example.component}
              <div className="text-xs text-muted-foreground/80 uppercase tracking-wide">
                {example.description}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}