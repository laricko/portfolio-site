"use client"

import { useSettings } from "@/components/settings-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getCopy, getProjects } from "@/lib/translations"
import Link from "next/link"

export default function ProjectsPage() {
  const { language } = useSettings()
  const copy = getCopy(language)
  const projects = getProjects(language)
  const projectsCopy = copy.projects

  return (
    <div className="container mx-auto max-w-5xl space-y-10 py-16">
      <header className="space-y-4 text-center">
        <Badge variant="secondary" className="mx-auto w-fit px-3 py-1 text-sm">
          {projectsCopy.badge}
        </Badge>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {projectsCopy.title}
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            {projectsCopy.description}
          </p>
        </div>
      </header>

      <Separator />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} className="flex h-full flex-col">
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <Badge variant="outline" className="whitespace-nowrap">
                  {projectsCopy.caseBadge}
                </Badge>
              </div>
              <CardDescription>{project.summary}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild variant="secondary" className="w-full">
                <Link href={`/projects/${project.slug}`}>
                  {projectsCopy.viewDetails}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
