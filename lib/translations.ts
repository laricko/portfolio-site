import type { Language } from "@/components/settings-provider"

import { copy } from "./translations/copy"
import { projects } from "./translations/projects"

export { socialLinks } from "./translations/social-links"
export type {
  Copy,
  LocalizedList,
  LocalizedString,
  NavigationCopy,
  HomeCopy,
  AboutCopy,
  ContactCopy,
  ProjectsCopy,
  SocialLink,
  TechStackSection,
  ProjectData,
} from "./translations/types"

export function getCopy(language: Language) {
  return copy[language]
}

export function getProjects(language: Language) {
  return projects.map((project) => ({
    slug: project.slug,
    title: project.title[language],
    summary: project.summary[language],
    overview: project.overview[language],
    useCases: project.useCases[language],
    achievements: project.achievements[language],
    myRole: project.myRole[language],
  }))
}

export const rawProjects = projects
