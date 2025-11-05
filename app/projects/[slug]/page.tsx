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
import shortProjects from "@/lib/projects-data"

function getProject(slug: string) {
  return shortProjects.find((project) => project.href.endsWith(slug))
}

export function generateStaticParams() {
  return shortProjects.map((project) => ({ slug: project.href.split("/").pop()! }))
}

type ProjectPageProps = {
  params: { slug: string }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const { title, description, useCases, achievements, myRole } = project

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
            {useCases.map((useCase) => (
              <li key={useCase} className="leading-relaxed">
                • {useCase}
              </li>
            ))}
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
            {achievements.map((achievement) => (
              <li key={achievement} className="leading-relaxed">
                • {achievement}
              </li>
            ))}
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
          <ul className="space-y-3">
            {myRole.map((roleItem) => (
              <li key={roleItem} className="leading-relaxed">
                • {roleItem}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
