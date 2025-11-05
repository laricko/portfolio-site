import Link from "next/link"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import projects from "@/lib/projects-data"

function getProject(slug: string) {
  return projects.find((project) => project.href.endsWith(slug))
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.href.split("/").pop()! }))
}

type ProjectPageProps = {
  params: { slug: string }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  const { title, description } = project

  return (
    <div className="container mx-auto max-w-5xl space-y-10 py-16">
      <div className="space-y-4">
        <Button variant="link" asChild className="px-0">
          <Link href="/projects">&larr; Back to projects</Link>
        </Button>
        <div className="space-y-3">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            Case study
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Use cases</CardTitle>
          <CardDescription>
            What this product solves for end users and stakeholders.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <Separator />
          <ul className="space-y-3">
            <li className="leading-relaxed">
              • Placeholder: describe the primary business problem addressed.
            </li>
            <li className="leading-relaxed">
              • Placeholder: outline a standout feature or workflow the platform
              enables.
            </li>
            <li className="leading-relaxed">
              • Placeholder: capture a measurable outcome (e.g., saved time,
              increased revenue).
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My contributions & achievements</CardTitle>
          <CardDescription>
            Concrete improvements and impact I delivered during the engagement.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <Separator />
          <ul className="space-y-3">
            <li className="leading-relaxed">
              • Placeholder: describe a key subsystem, feature, or integration I
              owned.
            </li>
            <li className="leading-relaxed">
              • Placeholder: mention performance wins, optimizations, or
              reliability gains.
            </li>
            <li className="leading-relaxed">
              • Placeholder: add collaboration highlights or cross-team impact.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My role</CardTitle>
          <CardDescription>
            Summarize responsibilities, leadership, and collaboration scope.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <Separator />
          <p>
            Placeholder: specify the official role (e.g., Lead Backend Engineer)
            and the squad or product area supported.
          </p>
          <p>
            Placeholder: highlight decision-making authority, stakeholders, and
            alignment responsibilities.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
