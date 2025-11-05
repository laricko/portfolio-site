import type { Language } from "@/components/settings-provider"

type LocalizedString = Record<Language, string>
type LocalizedList = Record<Language, string[]>

type NavigationCopy = {
  home: string
  projects: string
  about: string
  contact: string
  languageLabel: string
  themeLabel: string
  light: string
  dark: string
}

type HomeCopy = {
  greeting: string
  introduction: string
  highlight: string
  secondary: string
}

type AboutCopy = {
  title: string
  introHeading: string
  lead: string
  introBody: string[]
  introDescription: string
  stackTitle: string
  stackDescription: string
  philosophyTitle: string
  philosophyDescription: string
  philosophyBody: string[]
  achievementsTitle: string
  achievementsDescription: string
  educationTitle: string
  educationDetails: string
  achievements: string[]
}

type ContactCopy = {
  badge: string
  title: string
  description: string
  resumeTitle: string
  resumeDescription: string
  resumeAction: string
  linksTitle: string
  emailTitle: string
  emailDescription: string
}

type ProjectsCopy = {
  badge: string
  title: string
  description: string
  caseBadge: string
  viewDetails: string
  backToProjects: string
  useCasesTitle: string
  useCasesDescription: string
  achievementsTitle: string
  achievementsDescription: string
  roleTitle: string
  roleDescription: string
}

type SocialLink = {
  name: string
  href: string
  icon: "github" | "stackOverflow" | "telegram" | "leetCode"
  description: LocalizedString
}

type TechStackSection = {
  title: string
  icon: "braces" | "layers" | "database" | "wrench" | "server"
  entries: string[]
}

type Copy = {
  navigation: NavigationCopy
  home: HomeCopy
  about: AboutCopy
  contact: ContactCopy
  projects: ProjectsCopy
  techStack: TechStackSection[]
  socialLinks: SocialLink[]
}

export type ProjectData = {
  slug: string
  title: LocalizedString
  summary: LocalizedString
  overview: LocalizedString
  useCases: LocalizedList
  achievements: LocalizedList
  myRole: LocalizedList
}

export type {
  LocalizedList,
  LocalizedString,
  NavigationCopy,
  HomeCopy,
  AboutCopy,
  ContactCopy,
  ProjectsCopy,
  SocialLink,
  TechStackSection,
  Copy,
}
