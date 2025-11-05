"use client"

import { useSettings } from "@/components/settings-provider"
import { getCopy } from "@/lib/translations"

export default function Home() {
  const { language } = useSettings()
  const copy = getCopy(language)

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
      <p className="text-lg font-semibold text-primary">{copy.home.greeting}</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {copy.home.introduction}
      </h1>
      <p className="text-base text-muted-foreground sm:text-lg">
        {copy.home.highlight}
      </p>
      <p className="text-base text-muted-foreground sm:text-lg">
        {copy.home.secondary}
      </p>
    </section>
  )
}
