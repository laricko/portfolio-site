import Link from "next/link"

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
import projects from "@/lib/projects-data"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-5xl space-y-10 py-16">
      <header className="space-y-4 text-center">
        <Badge variant="secondary" className="mx-auto w-fit px-3 py-1 text-sm">
          Selected case studies
        </Badge>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Explore a sample of platforms I&apos;ve helped architect, scale, and
            maintain over the last few years.
          </p>
        </div>
      </header>

      <Separator />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.href} className="flex h-full flex-col">
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <Badge variant="outline" className="whitespace-nowrap">
                  Case study
                </Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild variant="secondary" className="w-full">
                <Link href={project.href}>View project details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
