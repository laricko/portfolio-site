"use client"

import { useSettings } from "@/components/settings-provider"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getCopy, type ProjectData } from "@/lib/translations"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"


type ProjectDetailProps = {
  project: ProjectData
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { language } = useSettings()
  const copy = getCopy(language)
  const projectsCopy = copy.projects

  const title = project.title[language]
  const overview = project.overview[language]
  const useCases = project.useCases[language]
  const achievements = project.achievements[language]
  const myRole = project.myRole[language]

  return (
    <div className="container mx-auto max-w-5xl space-y-12 py-16">
      <div className="space-y-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          aria-label={projectsCopy.backToProjects}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>{projectsCopy.backToProjects.replace("← ", "")}</span>
        </Link>
        <div className="space-y-3">
          <div className="space-y-4">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              {projectsCopy.caseBadge}
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
            <p className="text-base text-muted-foreground sm:text-lg">{overview}</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{projectsCopy.useCasesTitle}</CardTitle>
            <CardDescription>{projectsCopy.useCasesDescription}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <Separator />
            <ul className="space-y-3">
              {useCases.map((item) => (
                <li key={item} className="leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{projectsCopy.achievementsTitle}</CardTitle>
            <CardDescription>{projectsCopy.achievementsDescription}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <Separator />
            <ul className="space-y-3">
              {achievements.map((item) => (
                <li key={item} className="leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{projectsCopy.roleTitle}</CardTitle>
            <CardDescription>{projectsCopy.roleDescription}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <Separator />
            <ul className="space-y-3">
              {myRole.map((item) => (
                <li key={item} className="leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
