"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const THEME_KEY = "theme"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const [isDark, setIsDark] = React.useState(false)
  const isDarkRef = React.useRef(false)

  React.useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY)
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = saved === "dark" || (!saved && prefersDark)
    isDarkRef.current = shouldBeDark
    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  const toggleTheme = React.useCallback(() => {
    const nextIsDark = !isDarkRef.current
    isDarkRef.current = nextIsDark
    setIsDark(nextIsDark)
    document.documentElement.classList.toggle("dark", nextIsDark)
    localStorage.setItem(THEME_KEY, nextIsDark ? "dark" : "light")
  }, [])

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      checked={isDark}
      onCheckedChange={toggleTheme}
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
