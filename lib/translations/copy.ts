import type { Language } from "@/components/settings-provider"

import { socialLinks } from "./social-links"
import type { Copy } from "./types"

export const copy: Record<Language, Copy> = {
  en: {
    navigation: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      languageLabel: "Language",
      themeLabel: "Theme",
      light: "Light",
      dark: "Dark",
    },
    home: {
      greeting: "Hi, I'm Lari.",
      introduction:
        "Software engineer with 5 years of experience building full stack applications with Python and JavaScript.",
      highlight:
        "Primarily focused on backend development: REST APIs, data pipelines, internal tools, and services that just work.",
      secondary:
        "This site collects a few notes on that work and the stack I rely on every day. Go click around!",
    },

    // About page
    about: {
      title: "About me",
      lead: "A quick look at who I am and how I work.",
      // Intro section
      introHeading: "Background",
      introDescription:
        "How it starts.",
      introBody: [
        "I'm a senior Software engineer who started learning computer science in 2018 and now designs large Python services over the past five years.",
        "I care about code quality that the team can keep alive: clear boundaries, measured rollouts, and tests that catch what reviews miss.",
      ],

      // Stack section
      stackTitle: "Tools that stick",
      stackDescription:
        "These are the languages, frameworks, and services that usually end up in my toolbox.",

      // Philosophy section
      philosophyTitle: "How I approach code",
      philosophyDescription:
        "Principles I lean on when shaping services of backend.",
      philosophyBody: [
        "I lean on SOLID, DDD, and Clean Architecture to keep systems modular and readable.",
        "Love to write tests. Unit, integration, and end-to-end. They make change safer and smoother.",
      ],

      // Achievements section
      achievementsTitle: "Recent tasks",
      achievementsDescription:
        "Practical highlights from the last few projects.",
      achievements: [
        "Integrated payment providers like Sber, Tinkoff, and YooMoney.",
        "Integrating with OpenAI's language model to generate user's content.",
        "Working with database indexes and query plans to speed up slow SQL queries.",
        "Put CI/CD pipelines in place for teams that had none.",
        "Designed REST APIs across different microservices.",
        "Refactor legacy code.",
      ],

      // Education section
      educationTitle: "Education",
      educationDetails:
        "Rostov State University of Economics — Mathematics and Informatics.",
    },


    // Contact Page
    contact: {
      badge: "Let's work together",
      title: "Contact",
      description:
        "Planning a new build or joining an existing platform? I'm happy to talk through the backend side.",
      resumeTitle: "Resume",
      resumeDescription: "Download a short overview of my work history and skills.",
      resumeAction: "Download PDF",
      linksTitle: "Useful links",
      emailTitle: "Prefer email?",
      emailDescription: "Text me at laritsiuriumov@gmail.com and I'll reply within a day.",
    },

    // projects page
    projects: {
      badge: "Selected case studies",
      title: "Projects",
      description:
        "Platforms, Services I've helped design, extend, and keep in good shape.",
      caseBadge: "Case study",
      viewDetails: "View project details",
      backToProjects: "← Back to projects",

      // usecases section
      useCasesTitle: "Usecases",
      useCasesDescription: "What the product supports day to day.",

      // achievements section
      achievementsTitle: "My contributions",
      achievementsDescription: "A snapshot of the work I owned.",

      // role section
      roleTitle: "Role",
      roleDescription: "Scope and responsibilities.",
    },

    // about page - tech stack section
    techStack: [
      {
        title: "Programming languages",
        icon: "braces",
        entries: ["Python", "JavaScript", "TypeScript"],
      },
      {
        title: "Frameworks",
        icon: "layers",
        entries: [
          "Django",
          "Django REST Framework",
          "Flask",
          "FastAPI",
          "Aiohttp",
          "React",
          "Next.js",
        ],
      },
      {
        title: "Databases",
        icon: "database",
        entries: [
          "PostgreSQL",
          "MySQL",
          "Redis",
          "Elasticsearch",
          "MongoDB",
          "Amazon RDS",
        ],
      },
      {
        title: "Core tools",
        icon: "wrench",
        entries: [
          "RabbitMQ",
          "Kafka",
          "AWS (S3, ECR, EC2, Lambda, etc.)",
          "SQLAlchemy",
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
          "unittest.mock",
          "ArgoCD",
          "Grafana",
          "Postman",
        ],
      },
      {
        title: "Ways of working",
        icon: "server",
        entries: [
          "Microservices",
          "REST APIs",
          "Containerization",
          "TDD",
          "DDD",
          "OOP",
          "Stateless design",
          "Clean Architecture",
          "Troubleshooting",
          "Debugging",
        ],
      },
    ],

    // social links
    socialLinks,
  },
  ru: {
    navigation: {
      home: "Главная",
      projects: "Проекты",
      about: "Обо мне",
      contact: "Контакты",
      languageLabel: "Язык",
      themeLabel: "Тема",
      light: "Светлая",
      dark: "Тёмная",
    },
    home: {
      greeting: "Привет, я Лари.",
      introduction:
        "Инженер-программист с 5-летним опытом создания full stack приложений на Python и JavaScript.",
      highlight:
        "Больше всего работаю с бэкенд-разработкой: REST API, дата-пайплайнами, внутренними инструментами и сервисами, которые просто работают.",
      secondary:
        "Здесь собраны заметки о проектах и стеке, на который опираюсь каждый день. Загляните в разделы!",
    },
    about: {
      title: "Обо мне",
      lead: "Немного обо мне и о подходе к работе.",
      introHeading: "Опыт",
      introDescription: "С чего всё началось.",
      introBody: [
        "Я старший инженер-программист: начал изучать компьютерные науки в 2018 году и за последние пять лет спроектировал крупные Python-сервисы.",
        "Для меня важны понятные границы модулей, поэтапные релизы и тесты, которые ловят то, что пропустили на ревью.",
      ],
      stackTitle: "Инструменты",
      stackDescription: "Что чаще всего беру в работу.",
      philosophyTitle: "Подход",
      philosophyDescription:
        "Принципы, на которые опираюсь, строя бэкенд-сервисы.",
      philosophyBody: [
        "Опираюсь на SOLID, DDD и Clean Architecture, чтобы системы оставались модульными и читаемыми.",
        "Люблю писать тесты — юнит, интеграционные и end-to-end. Они делают изменения безопаснее и спокойнее.",
      ],
      achievementsTitle: "Недавние задачи",
      achievementsDescription: "Практические итоги последних проектов.",
      achievements: [
        "Интегрировал платёжных провайдеров: Сбер, Тинькофф и YooMoney.",
        "Подключил языковую модель OpenAI для генерации пользовательского контента.",
        "Работал с индексами и планами запросов, чтобы ускорить медленные SQL-запросы.",
        "Развернул CI/CD-пайплайны для команд, у которых их не было.",
        "Спроектировал REST API для разных микросервисов.",
        "Провёл рефакторинг легаси-кода.",
      ],
      educationTitle: "Образование",
      educationDetails:
        "РГЭУ (РИНХ) — прикладная математика и информатика.",
    },
    contact: {
      badge: "Давайте работать вместе",
      title: "Контакты",
      description:
        "Планируете запуск или присоединяетесь к существующей платформе? Готов обсудить бэкенд-часть.",
      resumeTitle: "Резюме",
      resumeDescription: "Краткое описание опыта и навыков.",
      resumeAction: "Скачать PDF",
      linksTitle: "Полезные ссылки",
      emailTitle: "Предпочитаете почту?",
      emailDescription: "Пишите на laritsiuriumov@gmail.com — отвечу в течение дня.",
    },
    projects: {
      badge: "Избранные кейсы",
      title: "Проекты",
      description:
        "Платформы и сервисы, которые я помогал проектировать, развивать и поддерживать.",
      caseBadge: "Кейс",
      viewDetails: "Подробнее о проекте",
      backToProjects: "← Ко всем проектам",
      useCasesTitle: "Сценарии использования",
      useCasesDescription: "Что продукт делает каждый день.",
      achievementsTitle: "Мой вклад",
      achievementsDescription: "Кратко о задачах, за которые отвечал.",
      roleTitle: "Роль",
      roleDescription: "Область ответственности.",
    },
    techStack: [
      {
        title: "Языки",
        icon: "braces",
        entries: ["Python", "JavaScript", "TypeScript"],
      },
      {
        title: "Фреймворки",
        icon: "layers",
        entries: [
          "Django",
          "Django REST Framework",
          "Flask",
          "FastAPI",
          "Aiohttp",
          "React",
          "Next.js",
        ],
      },
      {
        title: "Базы данных",
        icon: "database",
        entries: [
          "PostgreSQL",
          "MySQL",
          "Redis",
          "Elasticsearch",
          "MongoDB",
          "Amazon RDS",
        ],
      },
      {
        title: "Инструменты",
        icon: "wrench",
        entries: [
          "RabbitMQ",
          "Kafka",
          "AWS (S3, ECR, EC2, Lambda и др.)",
          "SQLAlchemy",
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
          "unittest.mock",
          "ArgoCD",
          "Grafana",
          "Postman",
        ],
      },
      {
        title: "Подходы",
        icon: "server",
        entries: [
          "Микросервисы",
          "REST API",
          "Контейнеризация",
          "TDD",
          "DDD",
          "OOP",
          "Stateless",
          "Clean Architecture",
          "Troubleshooting",
          "Debugging",
        ],
      },
    ],
    socialLinks,
  },
}
