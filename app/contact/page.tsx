import Link from "next/link"
import { Fragment } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Download, Github, Network, Send, Sigma } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/laricko",
    description: "Open-source projects, experiments, and community work.",
    icon: Github,
  },
  {
    name: "StackOverflow",
    href: "https://stackoverflow.com/users/14486187/larick",
    description: "Technical answers, Q&A contributions, and reputation milestones.",
    icon: Sigma,
  },
  {
    name: "Telegram",
    href: "https://t.me/regularsizedman",
    description: "Quickest way to reach me for collaborations or consulting.",
    icon: Send,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/larick/",
    description: "Algorithmic problem solving and interview preparation streaks.",
    icon: Network,
  },
]

export default function Contact() {
  return (
    <div className="container mx-auto max-w-4xl space-y-10 py-16">
      <header className="space-y-4 text-center">
        <Badge variant="secondary" className="mx-auto w-fit px-3 py-1 text-sm">
          Let&apos;s build something great
        </Badge>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Whether you&apos;re planning a new platform or scaling an existing one,
            I&apos;m ready to help craft resilient backend systems.
          </p>
        </div>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Resume</CardTitle>
          <CardDescription>
            Download a concise overview of my experience, skill set, and
            education.
          </CardDescription>
        </CardHeader>
        <CardFooter className="justify-center gap-3">
          <Button asChild size="lg" className="gap-2">
            <Link href="/Лари_Цюрюмов_резюме.pdf" download>
              <Download className="h-5 w-5" aria-hidden="true" />
              Download PDF
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stay in touch</CardTitle>
          <CardDescription>
            Reach out on the platform that suits you best. I respond quickly and
            keep the conversation focused on value.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Separator />
          <div className="space-y-3">
            {socialLinks.map((profile, index) => (
              <Fragment key={profile.name}>
                {index > 0 && <Separator />}
                <Button
                  asChild
                  variant="outline"
                  className="h-auto w-full justify-start gap-3 py-4 text-left"
                >
                  <Link href={profile.href} target="_blank" rel="noreferrer">
                    <profile.icon className="h-5 w-5 text-primary" />
                    <span className="flex flex-col">
                      <span className="text-base font-semibold">
                        {profile.name}
                      </span>
                      <span className="text-sm font-normal text-muted-foreground">
                        {profile.description}
                      </span>
                    </span>
                  </Link>
                </Button>
              </Fragment>
            ))}
          </div>
          <Separator />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Prefer email?</CardTitle>
          <CardDescription>
            Drop me a message at
            <span className="font-medium text-foreground">
              {" "}
              laritsiuriumov@gmail.com
            </span>
            . I typically reply within one business day.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
