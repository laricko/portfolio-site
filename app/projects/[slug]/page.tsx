import { ProjectDetail } from "@/components/project-detail"
import { rawProjects } from "@/lib/translations"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return rawProjects.map((project) => ({ slug: project.slug }))
}

type ProjectPageProps = {
  params: { slug: string }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = rawProjects.find((item) => item.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
