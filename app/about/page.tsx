import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Braces,
  Database,
  Layers,
  ServerCog,
  Wrench,
} from "lucide-react"

const techStack = [
  {
    title: "Programming Languages",
    icon: Braces,
    items: ["Python", "Javascript", "Typescript"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    items: [
      "Django",
      "Django Rest Framework (DRF)",
      "Flask",
      "FastAPI",
      "Aiohttp",
      "ReactJs",
      "NextJs",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "MongoDB",
      "Amazon RDS",
    ],
  },
  {
    title: "Core Tools",
    icon: Wrench,
    items: [
      "RabbitMQ",
      "Kafka",
      "AWS (S3, ECR, EC2, Lambda and etc)",
      "Sqlalchemy",
      "Celery",
      "Alembic",
      "Selenium",
      "Nginx",
      "Git",
      "Docker",
      "Linux",
      "CI/CD",
      "Swagger",
      "Asyncio",
      "Jira",
      "Pytest",
      "Mock",
      "ArgoCD",
      "Grafana",
      "Postman",
    ],
  },
  {
    title: "Methodologies",
    icon: ServerCog,
    items: [
      "Microservices",
      "REST API",
      "Containerization",
      "TDD",
      "DDD",
      "OOP",
      "Stateless",
      "Clean Architecture",
      "Troubleshooting",
      "Debugging",
    ],
  },
]

const achievements = [
  "Интеграция платежных систем",
  "Оптимизация SQL запросов",
  "Настройка CI/CD",
  "Написание тестов (pytest, integration, e2e)",
  "Разработка REST API и микросервисной архитектуры",
  "Рефакторинг и снижение технического долга",
  "Работа с очередями и асинхронными задачами",
]

export default function About() {
  return (
    <div className="container mx-auto max-w-5xl space-y-10 py-16">
      <section className="space-y-4 text-center">
        <Badge variant="secondary" className="mx-auto w-fit px-3 py-1 text-sm">
          Behind the systems
        </Badge>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About</h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            I am a <span className="font-semibold">Senior Python Developer</span>
            {" "}
            with <span className="font-semibold">5 years of experience</span>
            {" "}
            building complex backend systems.
          </p>
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
          <CardDescription>
            A quick snapshot of who I am and how I approach backend development.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-left text-muted-foreground">
          <p>
            I architect and deliver resilient backend platforms that empower
            product teams to iterate fast. From greenfield builds to large-scale
            refactors, I focus on sustainable solutions that keep engineering
            velocity high.
          </p>
          <p>
            Collaboration, clarity, and clean code are my guiding principles—I
            work closely with stakeholders, mentor teams, and translate business
            goals into robust technical roadmaps.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Core stack & tooling</CardTitle>
          <CardDescription>
            Technologies I rely on to craft performant and maintainable
            services.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 lg:grid-cols-2">
            {techStack.map((section) => (
              <div key={section.title} className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <section.icon className="h-4 w-4" aria-hidden="true" />
                  {section.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <Badge key={item} variant="secondary" className="px-3 py-1 text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Code philosophy</CardTitle>
          <CardDescription>
            Principles that shape every architecture and codebase I work on.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <Separator />
          <p>
            SOLID patterns, Domain-Driven Design, and Clean Architecture guide my
            approach to structuring services so they remain modular, testable,
            and future-proof.
          </p>
          <p>
            I champion high test coverage to safeguard releases, enforce
            maintainable standards, and accelerate onboarding for new team
            members.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Capabilities & achievements</CardTitle>
          <CardDescription>
            Highlights from recent projects and areas where I create immediate
            impact.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 sm:grid-cols-2">
            {achievements.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
