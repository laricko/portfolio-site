"use client"

import { useSettings } from "@/components/settings-provider"
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
import { getCopy } from "@/lib/translations"
import { Download, Github, Network, Send, Sigma } from "lucide-react"
import Link from "next/link"
import { Fragment } from "react"

const socialIcons = {
  github: Github,
  stackOverflow: Sigma,
  telegram: Send,
  leetCode: Network,
} as const

export default function Contact() {
  const { language } = useSettings()
  const copy = getCopy(language)
  const contact = copy.contact

  return (
    <div className="container mx-auto max-w-4xl space-y-10 py-16">
      <header className="space-y-4 text-center">
        <Badge variant="secondary" className="mx-auto w-fit px-3 py-1 text-sm">
          {contact.badge}
        </Badge>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {contact.title}
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            {contact.description}
          </p>
        </div>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>{contact.resumeTitle}</CardTitle>
          <CardDescription>{contact.resumeDescription}</CardDescription>
        </CardHeader>
        <CardFooter className="justify-center gap-3">
          <Button asChild size="lg" className="gap-2">
            <Link href="/Лари_Цюрюмов_резюме.pdf" download>
              <Download className="h-5 w-5" aria-hidden="true" />
              {contact.resumeAction}
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{contact.linksTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {copy.socialLinks.map((profile, index) => {
              const Icon = socialIcons[profile.icon]
              return (
                <Fragment key={profile.name}>
                  {index > 0 && <Separator />}
                  <Button
                    asChild
                    variant="outline"
                    className="h-auto w-full justify-start gap-3 py-4 text-left"
                  >
                    <Link href={profile.href} target="_blank" rel="noreferrer">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="flex flex-col">
                        <span className="text-base font-semibold">{profile.name}</span>
                        <span className="text-sm font-normal text-muted-foreground">
                          {profile.description[language]}
                        </span>
                      </span>
                    </Link>
                  </Button>
                </Fragment>
              )
            })}
          </div>
          <Separator />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{contact.emailTitle}</CardTitle>
          <CardDescription>{contact.emailDescription}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
