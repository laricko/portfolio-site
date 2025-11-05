"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useSettings } from "@/components/settings-provider"
import { useIsMobile } from "@/hooks/use-mobile"
import { getCopy, getProjects } from "@/lib/translations"
import Link from "next/link"
import * as React from "react"
import { Moon, Sun } from "lucide-react"

export function Header() {
  const isMobile = useIsMobile()
  const { language, setLanguage, theme, setTheme } = useSettings()
  const copy = React.useMemo(() => getCopy(language), [language])
  const projects = React.useMemo(() => getProjects(language), [language])

  const handleLanguageChange = (value: string) => {
    if (value === "en" || value === "ru") {
      setLanguage(value)
    }
  }

  const handleThemeChange = (value: string) => {
    if (value === "light" || value === "dark") {
      setTheme(value)
    }
  }

  return (
    <div className="flex w-full flex-wrap items-center gap-3">
      <NavigationMenu viewport={isMobile} className="flex-1">
        <NavigationMenuList className="flex w-full flex-wrap items-center gap-2 justify-start">
          <NavigationMenuItem>
            <NavigationMenuTrigger href="/projects/">
              {copy.navigation.projects}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {projects.map((project) => (
                  <ListItem key={project.slug} href={`/projects/${project.slug}`} title={project.title}>
                    {project.summary}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/about">{copy.navigation.about}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/contact">{copy.navigation.contact}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="ml-auto flex flex-wrap items-center gap-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">{copy.navigation.languageLabel}</span>
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[140px]" aria-label={copy.navigation.languageLabel}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ru">Русский</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">{copy.navigation.themeLabel}</span>
          <ToggleGroup type="single" value={theme} onValueChange={handleThemeChange} className="bg-background p-0">
            <ToggleGroupItem value="light" aria-label={copy.navigation.light} className="gap-2 px-3 py-2 text-sm">
              <Sun className="h-4 w-4" />
              <span>{copy.navigation.light}</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label={copy.navigation.dark} className="gap-2 px-3 py-2 text-sm">
              <Moon className="h-4 w-4" />
              <span>{copy.navigation.dark}</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground text-sm leading-snug line-clamp-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default Header
