"use client"

import { useSettings } from "@/components/settings-provider"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getCopy } from "@/lib/translations"
import { Braces, Database, Layers, ServerCog, Wrench } from "lucide-react"

const techIcons = {
  braces: Braces,
  layers: Layers,
  database: Database,
  wrench: Wrench,
  server: ServerCog,
} as const

export default function About() {
  const { language } = useSettings()
  const copy = getCopy(language)
  const about = copy.about

  return (
    <div className="container mx-auto max-w-5xl space-y-10 py-16">
      <section className="space-y-4 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {about.title}
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            {about.lead}
          </p>
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>{about.introHeading}</CardTitle>
          <CardDescription>{about.introDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-left text-muted-foreground">
          {about.introBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{about.stackTitle}</CardTitle>
          <CardDescription>{about.stackDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 lg:grid-cols-2">
            {copy.techStack.map((section) => {
              const Icon = techIcons[section.icon]
              return (
                <div key={section.title} className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {section.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.entries.map((item) => (
                      <Badge key={item} variant="secondary" className="px-3 py-1 text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{about.philosophyTitle}</CardTitle>
          <CardDescription>{about.philosophyDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <Separator />
          {about.philosophyBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{about.achievementsTitle}</CardTitle>
          <CardDescription>{about.achievementsDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 sm:grid-cols-2">
            {about.achievements.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-lg border p-3">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{about.educationTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-muted-foreground">
          <p className="text-sm">{about.educationDetails}</p>
        </CardContent>
      </Card>
    </div>
  )
}
