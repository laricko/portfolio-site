import type { SocialLink } from "./types"

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/laricko",
    icon: "github",
    description: {
      en: "Side projects, experiments, and open-source fixes.",
      ru: "Пет-проекты, эксперименты и патчи с открытым исходным кодом.",
    },
  },
  {
    name: "StackOverflow",
    href: "https://stackoverflow.com/users/14486187/larick",
    icon: "stackOverflow",
    description: {
      en: "Answers I've posted and problems I've solved for others.",
      ru: "Ответы на технические вопросы и накопленная репутация.",
    },
  },
  {
    name: "Telegram",
    href: "https://t.me/regularsizedman",
    icon: "telegram",
    description: {
      en: "Fastest way to reach me for a quick chat.",
      ru: "Самый быстрый способ обсудить задачу.",
    },
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/larick/",
    icon: "leetCode",
    description: {
      en: "Algorithms practice and interview prep notes.",
      ru: "Практика алгоритмов и заметки к собеседованиям.",
    },
  },
]
