import * as React from "react"

import { cn } from "@/lib/utils"

// Card backgrounds mapping to create colorful gradients like the reference image
const cardBackgrounds = [
  "bg-gradient-to-br from-orange-500 to-rose-500", // Coral to rose
  "bg-gradient-to-br from-purple-700 to-indigo-600", // Purple to indigo
  "bg-gradient-to-br from-blue-600 to-cyan-400", // Blue to cyan
  "bg-gradient-to-br from-emerald-600 to-teal-500", // Green to teal
  "bg-gradient-to-br from-violet-600 to-purple-500", // Violet to purple
  "bg-gradient-to-br from-rose-600 to-pink-500", // Rose to pink
  "bg-gradient-to-br from-amber-600 to-yellow-500", // Amber to yellow
  "bg-gradient-to-br from-blue-500 to-indigo-400", // Blue to indigo
]

// Function to get a consistent gradient based on agent ID or name
const getCardBackground = (identifier: string) => {
  const index = Array.from(identifier).reduce((acc, char) => acc + char.charCodeAt(0), 0) % cardBackgrounds.length;
  return cardBackgrounds[index];
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { agentId?: string }
>(({ className, agentId, ...props }, ref) => {
  const backgroundClass = agentId ? getCardBackground(agentId) : "";
  
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border shadow-sm overflow-hidden w-full max-w-3xl",
        backgroundClass,
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-5", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold tracking-tight text-white",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-white/80", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-5 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }